import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileRechargeService } from '../Service/mobile-recharge.service';
import { Customer } from '../models/Customers.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  DisableInputs:boolean=true

  DummyVariable:Customer={ phoneNumber:0, name:"", password:""}

  constructor(private router:Router, public service:MobileRechargeService) { }

  ngOnInit(): void {
    this.DummyVariable=this.service.CurrentCustomer
  }

  EnableChange(){
    this.DisableInputs=false
  }

  SaveChanges(Form:any){
    this.DisableInputs=true
    this.DummyVariable.phoneNumber=this.service.CurrentCustomer.phoneNumber
    this.DummyVariable.name=Form.value.Name
    this.DummyVariable.password=Form.value.Password
    this.service.UpdateCustomer(this.DummyVariable.phoneNumber,this.DummyVariable).subscribe(
      {next:(response)=>{console.log(response)}}
    )
    this.router.navigate(['Home'])
  }

  OnClickEnable(){
    this.service.AutoRecharge=true
  }

  OnClickDisable(){
    this.service.AutoRecharge=false
  }

}
