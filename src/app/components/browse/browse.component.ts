import { Component } from '@angular/core';

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
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [PoInfoModule, HttpClientModule, PoTableModule, PoSearchModule, PoButtonGroupModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {


  //Construtor para criar a conexão HTTP e navegação com Router
  constructor(
    private http: HttpClient,
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

    //Cria na SESSION o código do grupo e a operação
    sessionStorage.setItem("grupoId",   "");
    sessionStorage.setItem("operation", "");
  }


}
