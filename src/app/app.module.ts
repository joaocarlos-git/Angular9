import { FooterComponent } from './../../frontend/src/app/components/template/footer/footer.component';
import { HeadersComponent } from './../../frontend/src/app/components/template/footer/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
});
export class AppModule { }
