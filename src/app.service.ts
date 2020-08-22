import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { customer } from './customer/customer.entity';
import { ocorrencia } from './ocorrencia/ocorrencia.entity';
import { product } from './product/product.entity';
import { OcorrenciaService } from './ocorrencia/ocorrencia.service';
import { CustomerService } from './customer/customer.service';
import { ProductService } from './product/product.service';
const nodemailer = require('nodemailer');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  private ocorrencia: ocorrencia;
  private customer = new customer();
  private isEnviado: boolean;
  private listaProducts: Array<product> = [];
  private mensagemCustomer: string;
  private ocorrenciaDescricao: string;

  constructor(
    private readonly ocorrenciaService : OcorrenciaService,
    private readonly customerService : CustomerService,
    private readonly productService : ProductService
  ){}


  @Cron(CronExpression.EVERY_30_SECONDS)
  async sendMail() {
    this.buscaCustomer();
  }
  
  //busca cliente e chama o busca produto
  async buscaCustomer(){
    this.customerService.findAll().then(value =>{

      for(var i = 0; i < value.length; i++){
        this.customer.name = value[i].name;
        this.customer.email = value[i].email;
        this.buscarProduct(this.customer.name, this.customer.email);
      }
    }, 
    function(value) {
    });

  }

  // envia o email
  async buscarProduct(name: string, email: string){
    this.productService.findAll().then(value => {
      this.listaProducts = value;    
      this.enviarEmail(email, this.listaProducts, name);
    }, 
    function(value) {
    });
  }

  //envia email com os produtos
  async enviarEmail(email: string, product: Array<product>, name:string){
    this.mensagemCustomer = '';

    for(var i = 0; i < product.length; i++){
      const productName     = product[i].name;
      const productDescricao = product[i].descricao;
      const productPreco     = product[i].preco;
      const productPrecoPromocao    = product[i].precoPromocao;

      this.mensagemCustomer += productName +" "+ productDescricao +
                              "<br>De R$:"+ productPreco +
                              "<br>Por R$:"+productPrecoPromocao;
    }
   
    let transporter = nodemailer.createTransport({
      host:  "localhost",
      port: "587",
      auth: null,
    });

    transporter.sendMail({
      from: 'gabriel.sementino@edu.unipar.br',
      to: email,
      subject: "OFERTAS DA SEMANA", 
      html: "Olá " + name + " PROMOÇÃO DA SEMANA!<br><br>"+
            "<p>"+this.mensagemCustomer+"</p>",
    }).then(info =>{
      this.isEnviado = true;
      this.ocorrenciaDescricao = 'Email emviado para [ '+ email +' ]';
      this.salvaRegistro(true, this.ocorrenciaDescricao);
    },
      function(info){}
    );    

    this.isEnviado = false;
    this.ocorrenciaDescricao = 'Erro ao enviar email para [ '+ email +' ]';
    this.salvaRegistro(this.isEnviado, this.ocorrenciaDescricao);
    
  }

  // registra logs
  async salvaRegistro(IsEnviado:boolean, ocorrenciaDescricao: string){
    
    var data = new Date();
    this.ocorrencia = new ocorrencia();

    this.ocorrencia.IsEnviado = IsEnviado;
    this.ocorrencia.descricao = ocorrenciaDescricao;
    this.ocorrencia.dataEvento = data;

    this.ocorrenciaService.save(this.ocorrencia);
  }
  
}
