import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileRechargeService } from '../Service/mobile-recharge.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, public service:MobileRechargeService) { }

  ngOnInit(): void {
    this.service.GetAllCustomer().subscribe(
      {next:(response)=>{this.service.AllCustomers=response;console.log(response)}}
    )
    this.service.GetAllCustomerPlan().subscribe(
      {next:(response)=>{this.service.AllCustomerPlans=response;console.log(response)}}
    )
  }

  CheckLogin(Form:any){
    this.service.AllCustomers.forEach(
      cust=>{
        if(cust.phoneNumber==Form.value.PhoneNumber && cust.password==Form.value.Password)
          {this.service.CurrentCustomer.name=cust.name,
            this.service.CurrentCustomer.phoneNumber=cust.phoneNumber,
            this.service.CurrentCustomer.password=cust.password
            this.service.AllCustomerPlans.forEach(
              custplan=>{
                this.service.CurrentCustomerPlan.phoneNumber=cust.phoneNumber
                if(custplan.phoneNumber==cust.phoneNumber)
                  {
                    this.service.CurrentCustomerPlan.price=custplan.price
                    this.service.CurrentCustomerPlan.data=custplan.data
                    this.service.CurrentCustomerPlan.voice=custplan.voice
                    this.service.CurrentCustomerPlan.sms=custplan.sms
                    this.service.CurrentCustomerPlan.validity=custplan.validity
                  }
              }
            )
            this.router.navigate(['Home'])
          }
          else{
            this.service.CheckLogin=false
          }
      })
  }

  RedirectToRegister(){
    this.router.navigate(['Register'])
  }

}
