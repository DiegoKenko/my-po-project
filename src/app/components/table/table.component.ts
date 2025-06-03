import { Component } from '@angular/core';
import { Datasource } from '../../datasource/datasource';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterOutlet, Router } from '@angular/router';

import {
  PoInfoModule,
  PoTableModule,
  PoSearchModule,
  PoTableColumn,
  PoTagType,
  PoTableAction,
  PoButtonGroupModule,
  PoButtonGroupItem,
} from '@po-ui/ng-components';
import { RegrasDatasource } from '../../datasource/regras/regras.datasource';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [PoInfoModule, HttpClientModule, PoTableModule, PoSearchModule, PoButtonGroupModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  //Variáveis que irão definir as colunas e os dados
  public columns: Array<PoTableColumn> = [];
  public items: Array<any> = [];
  public actions: Array<PoTableAction> = [];

  //Construtor para criar a conexão HTTP e navegação com Router
  constructor(
    private datasource:RegrasDatasource,
    private router: Router
  ) {};

  //Na Inicialização da página
  ngOnInit(): void {
    /*
    //Teste abaixo feito para mostrar o Token do Protheus, deixando comentado
    const erpToken = sessionStorage.getItem('ERPTOKEN') ?? '';

    if (sessionStorage.getItem("insideProtheus") == "1") {
      (document.getElementById("obs1") as HTMLInputElement).innerHTML = "Dentro do Protheus";
    }
    else {
      (document.getElementById("obs1") as HTMLInputElement).innerHTML = "Fora do Protheus";
    }
    (document.getElementById("obs2") as HTMLInputElement).innerHTML = erpToken;
    */

    //Aciona para buscar as colunas e os conteúdos delas
    this.columns = this.getColumns();
    this.items   = this.getItems();

    //Cria na SESSION o código do grupo e a operação
    sessionStorage.setItem("grupoId",   "");
    sessionStorage.setItem("operation", "");
  }

  //Busca as informações das colunas
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'data', width: '8%' },
      { property: 'hora' },
      { property: 'tarefa', width: '20%' },    
    ];
  }

  //Busca as informações via API
  getItems(): Array<Regra> {     
    return this.datasource.getRegras();
  }

  //Ação ao clicar no botão Refresh
  refreshBrowse() {
    this.items = this.getItems();
    
    //O trecho abaixo é opcional, esta apenas demonstrando a data e hora ao clicar no botão Refresh
    let dateTime = new Date();
    var messageDate = "(atualizado em ";
    messageDate += dateTime.getDay() + "/" + dateTime.getMonth() + "/" + dateTime.getFullYear() + " às ";
    messageDate += dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
    messageDate += ")";

    (document.getElementsByClassName("po-info-value")[0] as HTMLInputElement).innerHTML = messageDate;
  }

  //Ação ao clicar no Incluir
  newButton() {
    //console.log("cliquei no Incluir");

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   "");
    sessionStorage.setItem("operation", "3");
    this.router.navigate(['/', 'manipulate']);
  }

  //Ação ao clicar no Visualizar
  viewButton(objectParam:any) {
    var grupoId = objectParam.grupo;

    //console.log("cliquei no Visualizar");
    //console.log("grupo: " + grupoId);

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   grupoId);
    sessionStorage.setItem("operation", "2");
    this.router.navigate(['/', 'manipulate']);
  }

  //Ação ao clicar no Alterar
  editButton(objectParam:any) {
    var grupoId = objectParam.grupo;

    //console.log("cliquei no Alterar");
    //console.log("grupo: " + grupoId);

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   grupoId);
    sessionStorage.setItem("operation", "4");
    this.router.navigate(['/', 'manipulate']);
  }

  //Ação ao clicar no Excluir
  deleteButton(objectParam:any) {
    var grupoId = objectParam.grupo;

    //console.log("cliquei no Excluir");
    //console.log("grupo: " + grupoId);

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   grupoId);
    sessionStorage.setItem("operation", "5");
    this.router.navigate(['/', 'manipulate']);
  }

}
