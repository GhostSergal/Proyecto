import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ItemInfoPage } from '../item-info/item-info.page';
import { ItemInfoPageModule } from '../item-info/item-info.module';
import { Routes } from '@angular/router';

const routes: Routes =[
  {
    path: '',
    component: ItemInfoPage
  }
]
@NgModule({
  entryComponents:[
    ItemInfoPage 
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    ComponentsModule,
    ItemInfoPageModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
