import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ProductReadComponent } from './../../frontend/src/app/components/product/product-read/product-read.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './../../frontend/src/app/components/template/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ProductCreateComponent } from './../../frontend/src/app/components/product/product-create/product-create.component';
import { RedDirective } from './../../frontend/src/app/directives/red.directive';
import { ProductCrudComponent } from './../../frontend/src/app/views/product-crud/product-crud.component';
import { HomeComponent } from './../../frontend/src/app/views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './../../frontend/src/app/components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeadersComponent } from './../../frontend/src/app/components/template/footer/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';




import localePt from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    NavComponent, 
    HomeComponent, 
    ProductCrudComponent, 
    RedDirective, 
    ProductCreateComponent,
    ProductReadComponent,
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
