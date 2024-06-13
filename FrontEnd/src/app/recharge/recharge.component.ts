import { Component, OnInit } from '@angular/core';
import { MobileRechargeService } from '../Service/mobile-recharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  constructor(public service:MobileRechargeService, private router:Router) { }

  ngOnInit(): void {}
  
  RechargeUser(Form:any){
    this.service.NewCustomerPlan.phoneNumber=this.service.CurrentCustomer.phoneNumber
    if(Form.value.RechargeOption==10){
      this.service.NewCustomerPlan.price=this.service.RechargeOptions[0].price
      this.service.NewCustomerPlan.data=this.service.RechargeOptions[0].data
      this.service.NewCustomerPlan.voice=this.service.RechargeOptions[0].voice
      this.service.NewCustomerPlan.sms=this.service.RechargeOptions[0].sms
      this.service.NewCustomerPlan.validity=this.service.RechargeOptions[0].validity
    }
    if(Form.value.RechargeOption==20){
      this.service.NewCustomerPlan.price=this.service.RechargeOptions[1].price
      this.service.NewCustomerPlan.data=this.service.RechargeOptions[1].data
      this.service.NewCustomerPlan.voice=this.service.RechargeOptions[1].voice
      this.service.NewCustomerPlan.sms=this.service.RechargeOptions[1].sms
      this.service.NewCustomerPlan.validity=this.service.RechargeOptions[1].validity
    }
    if(Form.value.RechargeOption==50){
      this.service.NewCustomerPlan.price=this.service.RechargeOptions[2].price
      this.service.NewCustomerPlan.data=this.service.RechargeOptions[2].data
      this.service.NewCustomerPlan.voice=this.service.RechargeOptions[2].voice
      this.service.NewCustomerPlan.sms=this.service.RechargeOptions[2].sms
      this.service.NewCustomerPlan.validity=this.service.RechargeOptions[2].validity
    }
    if(Form.value.RechargeOption==200){
      this.service.NewCustomerPlan.price=this.service.RechargeOptions[3].price/2
      this.service.NewCustomerPlan.data=this.service.RechargeOptions[3].data
      this.service.NewCustomerPlan.voice=this.service.RechargeOptions[3].voice
      this.service.NewCustomerPlan.sms=this.service.RechargeOptions[3].sms
      this.service.NewCustomerPlan.validity=this.service.RechargeOptions[3].validity
    }
    this.router.navigate(['Payment'])
  }
}