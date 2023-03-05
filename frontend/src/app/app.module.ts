import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms'
import {DropdownModule} from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


import {MessageService} from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductCrudComponent,
    HomeComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    DividerModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    ToastModule,
    HttpClientModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    DropdownModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
