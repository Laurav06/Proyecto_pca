import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopbooksPageRoutingModule } from './topbooks-routing.module';

import { topbooksPage } from './topbooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopbooksPageRoutingModule
  ],
  declarations: [topbooksPage]
})
export class topbooksPageModule {}