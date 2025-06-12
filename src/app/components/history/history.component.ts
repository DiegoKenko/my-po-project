import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterOutlet, Router, RouterModule } from '@angular/router';

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
import { Historico } from '../../models/historico.model';
import { HistoricoDatasource } from '../../datasource/historico/historico.datasource';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [PoInfoModule, HttpClientModule, PoTableModule, PoSearchModule, PoButtonGroupModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  //Variáveis que irão definir as colunas e os dados
  public columns: Array<PoTableColumn> = [];
  public items: Array<Historico> = [];
  public actions: Array<PoTableAction> = [];

  //Construtor para criar a conexão HTTP e navegação com Router
  constructor(
    private http: HttpClient,
    private router: Router,
    private historicoDataSource: HistoricoDatasource
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
      { property: 'id', width: '8%', label: 'ID' },
      { property: 'data', width: '12%', label: 'Data', type: 'string', format: 'date:dd/MM/yyyy' },
      { property: 'hora', width: '10%', label: 'Hora', type: 'string' },
      { property: 'sucesso', width: '10%', label: 'Sucesso', type: 'string' },
      { property: 'obs', width: '20%', label: 'Observação', type: 'string' },
      { property: 'log', width: '20%', label: 'Log', type: 'string' },
      { property: 'empsai', width: '10%', label: 'Empresa Saída', type: 'string' },
      { property: 'empent', width: '10%', label: 'Empresa Entrada', type: 'string' },
      { property: 'nf', width: '10%', label: 'Nota Fiscal', type: 'string' },
      { property: 'nfserie', width: '10%', label: 'Série NF', type: 'string' },
      { property: 'envmail', width: '10%', label: 'Email enviado?', type: 'string' },
      { property: 'numsa', width: '10%', label: 'Número SA', type: 'string' },
      { property: 'numpv', width: '10%', label: 'Número PV', type: 'string' }
    ];
  }

  //Busca as informações via API
  getItems() {
    this.items = this.historicoDataSource.listarhistoricos();
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

}
