import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertPageComponent } from './views/convert-page/convert-page.component';
import { HistoryComponent } from './views/history/history.component';
import { HomeComponent } from './views/home/home.component';
import { PageListComponent } from './views/page-list/page-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listar-simbolos', component: PageListComponent },
  { path: 'converter', component: ConvertPageComponent },
  { path: 'historico', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
