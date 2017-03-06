import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule],
  exports: [HeaderComponent]
})
export class HeaderModule {
  constructor() {
  }
}
