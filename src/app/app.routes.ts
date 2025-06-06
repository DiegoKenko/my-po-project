import { Routes } from '@angular/router';
import { BrowseTESComponent } from './components/browse/TES/tes.browse.component';
import { BrowseCCComponent } from './components/browse/CC/cc.browse.component';
import { BrowseContaComponent } from './components/browse/Conta/conta.browse.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
    {path: 'browseCC',     title: 'Cadastro',  component: BrowseCCComponent},
    {path: 'browseCnt',     title: 'Cadastro',  component: BrowseContaComponent},
    {path: 'browseTES',     title: 'Cadastro',  component: BrowseTESComponent},
    {path: 'history',    title: 'Histórico de execução',  component: HistoryComponent},
];