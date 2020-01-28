import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemInfoPageRoutingModule } from './item-info-routing.module';

import { ItemInfoPage } from './item-info.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemInfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItemInfoPage]
})
export class ItemInfoPageModule {}
