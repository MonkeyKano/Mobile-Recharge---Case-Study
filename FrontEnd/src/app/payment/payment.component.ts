import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileRechargeService } from '../Service/mobile-recharge.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router, public service:MobileRechargeService) { }

  ngOnInit(): void {
  }

  PaymentMethod(){}

  RedirectToHome(){
    this.service.PostNewCustomerPlan(this.service.NewCustomerPlan).subscribe(
      {next:(response)=> {this.service.CurrentCustomerPlan=response; console.log(response)}})
            this.router.navigate(['Home'])
  }
}
