import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RechargeComponent,
    PaymentComponent,
    HistoryComponent,
    UpdateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
