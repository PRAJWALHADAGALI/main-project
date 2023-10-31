import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ],
  imports: [ FooterModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FooterModule {}
