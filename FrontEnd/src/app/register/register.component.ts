import { Component, OnInit } from '@angular/core';
import { MobileRechargeService } from '../Service/mobile-recharge.service';
import { Router } from '@angular/router';
import { Customer } from '../models/Customers.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  NewCustomer:Customer={ phoneNumber:0, name:"", password:""}

  constructor(private service:MobileRechargeService, private router:Router) { }

  ngOnInit(): void {
  }

  RegisterUser(Form:any){
    this.NewCustomer={name:Form.value.Name,phoneNumber:Form.value.PhoneNumber,password:Form.value.Password}
    this.service.PostNewCustomer(this.NewCustomer).subscribe(
      {next:(response)=>{console.log(response)}}
    )
    this.router.navigate(['Login'])
  }

}
