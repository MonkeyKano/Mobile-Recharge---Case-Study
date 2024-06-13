import { Component, OnInit } from '@angular/core';
import { MobileRechargeService } from '../Service/mobile-recharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service:MobileRechargeService, private router:Router) { }

  ngOnInit(): void {
    this.service.GetAllCustomer().subscribe(
      {next:(response)=>{this.service.AllCustomers=response}}
    )
    this.service.GetAllCustomerPlan().subscribe(
      {next:(respone)=>{this.service.AllCustomerPlans=respone}}
    )
    this.service.AllCustomers.forEach(
      cust=>{
        if(cust.phoneNumber==this.service.CurrentCustomer.phoneNumber && cust.password==this.service.CurrentCustomer.password)
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
          }
      })
  }

}
