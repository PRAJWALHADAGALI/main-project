import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [ HeaderModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeaderModule {}
