import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [ IntroComponent ],
  exports: [ IntroComponent ],
  imports: [ IntroModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IntroModule {}
