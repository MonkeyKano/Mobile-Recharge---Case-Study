import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Home',component:HomeComponent},
  {path:'Recharge',component:RechargeComponent},
  {path:'Payment',component:PaymentComponent},
  {path:'History',component:HistoryComponent},
  {path:'Update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
