import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {  Router } from '@angular/router';
import {
  PoInfoModule,
  PoTableModule,
  PoSearchModule,
  PoButtonGroupModule,
  PoTableColumn,
  PoTableAction,
} from '@po-ui/ng-components';
import { RegrasDatasource } from '../../../datasource/regras/regras.datasource';

@Component({
  selector: 'app-tes-browse',
  standalone: true,
  imports: [PoInfoModule, HttpClientModule, PoTableModule, PoSearchModule, PoButtonGroupModule],
  templateUrl: './tes.browse.component.html',
  styleUrl: './tes.browse.component.css'
})
export class BrowseTESComponent {
  
    //Variáveis que irão definir as colunas e os dados
    public columns: Array<PoTableColumn> = [];
    public items: Array<any> = [];
    public actions: Array<PoTableAction> = [];  
  
    //Construtor para criar a conexão HTTP e navegação com Router
    constructor(
      private http: HttpClient,
      private router: Router,
      private regraDataSource:RegrasDatasource
    ) { };
  
    //Na Inicialização da página
    ngOnInit(): void {
      //Aciona para buscar as colunas e os conteúdos delas
      this.columns = this.getColumns();
      this.getItems();
  
      //Cria na SESSION o código do grupo e a operação
      sessionStorage.setItem("grupoId", "");
      sessionStorage.setItem("operation", "");
    }
  
    //Busca as informações das colunas
    getColumns(): Array<PoTableColumn> {
      return [
        { property: 'id', width: '8%' },
        { property: 'ccEnt', label: "CC Entrada" },
        { property: 'emp_ent', label: "Empresa" },
        { property: 'tpProduto', label: "Tipo do produto" },
        { property: 'tesSai', label: "TES Saída" },
        { property: 'tesEnt', label: "TES Entrada" },
        { property: 'substTrib', label: "Substituição trib." }
      ];
    }
  
    //Busca as informações via API
    getItems() {
      this.items = this.regraDataSource.listarRegrasTES()
    }
  
    //Ação ao clicar no botão Refresh
    refreshBrowse() {
      this.getItems();
  
      //O trecho abaixo é opcional, esta apenas demonstrando a data e hora ao clicar no botão Refresh
      let dateTime = new Date();
      var messageDate = ''
  
      messageDate += "(atualizado em ";
      messageDate += dateTime.getDay() + "/" + dateTime.getMonth() + "/" + dateTime.getFullYear() + " às ";
      messageDate += dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
      messageDate += ")";
  
      (document.getElementsByClassName("po-info-value")[0] as HTMLInputElement).innerHTML = messageDate;
    }
  
    //Ação ao clicar no Incluir
    newButton() {
      //console.log("cliquei no Incluir");
  
      //Atualiza a SESSION e aciona a tela de manipulação
      sessionStorage.setItem("grupoId", "");
      sessionStorage.setItem("operation", "3");
      this.router.navigate(['/', 'manipulate']);
    }
  
    //Ação ao clicar no Visualizar
    viewButton(objectParam: any) {
      var grupoId = objectParam.grupo;
  
      //console.log("cliquei no Visualizar");
      //console.log("grupo: " + grupoId);
  
      //Atualiza a SESSION e aciona a tela de manipulação
      sessionStorage.setItem("grupoId", grupoId);
      sessionStorage.setItem("operation", "2");
      this.router.navigate(['/', 'manipulate']);
    }
  
    //Ação ao clicar no Alterar
    editButton(objectParam: any) {
      var grupoId = objectParam.grupo;
  
      //console.log("cliquei no Alterar");
      //console.log("grupo: " + grupoId);
  
      //Atualiza a SESSION e aciona a tela de manipulação
      sessionStorage.setItem("grupoId", grupoId);
      sessionStorage.setItem("operation", "4");
      this.router.navigate(['/', 'manipulate']);
    }
  
    //Ação ao clicar no Excluir
    deleteButton(objectParam: any) {
      var grupoId = objectParam.grupo;
  
      //console.log("cliquei no Excluir");
      //console.log("grupo: " + grupoId);
  
      //Atualiza a SESSION e aciona a tela de manipulação
      sessionStorage.setItem("grupoId", grupoId);
      sessionStorage.setItem("operation", "5");
      this.router.navigate(['/', 'manipulate']);
    }
}
