import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  imports: [ HomeModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule {}
