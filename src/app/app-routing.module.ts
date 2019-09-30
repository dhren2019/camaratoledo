import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cursosformacion', loadChildren: './cursosformacion/cursosformacion.module#CursosformacionPageModule' },
  { path: 'espacioscoworking', loadChildren: './espacioscoworking/espacioscoworking.module#EspacioscoworkingPageModule' },
  { path: 'searchpage', loadChildren: './search/search.module#SearchPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
