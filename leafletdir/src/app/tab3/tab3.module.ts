import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletD3Module } from '@asymmetrik/ngx-leaflet-d3';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LeafletModule,
    LeafletD3Module,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
