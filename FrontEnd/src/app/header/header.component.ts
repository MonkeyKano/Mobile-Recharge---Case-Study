import { Component, OnInit } from '@angular/core';
import { MobileRechargeService } from '../Service/mobile-recharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:MobileRechargeService,private router:Router) { }

  ngOnInit(): void {
  }

  RedirectToLogin(){
    this.service.CurrentCustomer={phoneNumber:0, name:"", password:""}
    this.service.CurrentCustomerPlan={phoneNumber:0, price:0, data:0, voice:"", sms:0, validity:0}
    this.service.CheckLogin=true
    this.router.navigate(['Login'])
  }

  RedirectToRecharge(){
    this.router.navigate(['Recharge'])
  }

  RedirectToUpdate(){
    this.router.navigate(['Update'])
  }

  RedirectToHistory(){
    this.router.navigate(['History'])
  }

  RedirectToHome(){
    this.router.navigate(['Home'])
  }

}
