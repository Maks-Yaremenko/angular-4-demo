import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresaleRoutingModule } from './presale-routing.module';
import { PresaleComponent } from './presale.component';

@NgModule({
  imports: [
    CommonModule,
    PresaleRoutingModule
  ],
  declarations: [PresaleComponent]
})
export class PresaleModule { }
