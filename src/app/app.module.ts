import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityService } from './Services/City-Service';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerService } from './Services/Customer-Service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CityService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
