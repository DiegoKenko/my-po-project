import { Routes } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
    {path: 'browse',     title: 'Cadastro',  component: BrowseComponent},
    {path: 'history',    title: 'Histórico de execução',  component: HistoryComponent},
];