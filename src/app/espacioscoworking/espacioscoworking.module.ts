import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EspacioscoworkingPage } from './espacioscoworking.page';

const routes: Routes = [
  {
    path: '',
    component: EspacioscoworkingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EspacioscoworkingPage]
})
export class EspacioscoworkingPageModule {}
