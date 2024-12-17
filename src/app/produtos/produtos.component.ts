import { Component } from '@angular/core';

import {
  PoLinkModule,
  PoInfoModule
} from '@po-ui/ng-components';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [PoLinkModule, PoInfoModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {}