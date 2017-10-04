import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentRoutingModule } from './managment-routing.module';
import { ManagmentComponent } from './managment.component';

@NgModule({
  imports: [
    CommonModule,
    ManagmentRoutingModule
  ],
  declarations: [ManagmentComponent]
})
export class ManagmentModule { }
