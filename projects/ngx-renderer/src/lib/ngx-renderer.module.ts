import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { NgxRendererComponent } from './ngx-renderer.component';

@NgModule({
  declarations: [NgxRendererComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [NgxRendererComponent]
})
export class NgxRendererModule { }
