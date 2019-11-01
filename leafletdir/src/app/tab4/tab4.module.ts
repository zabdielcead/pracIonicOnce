import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab4Page } from './tab4.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletD3Module } from '@asymmetrik/ngx-leaflet-d3';
const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletModule,
    LeafletD3Module,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
