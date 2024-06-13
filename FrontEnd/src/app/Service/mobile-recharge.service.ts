import { Injectable } from '@angular/core';
import { Customer } from '../models/Customers.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { CurrentPlan } from '../models/CurrentPlan.model';

@Injectable({
  providedIn: 'root'
})
export class MobileRechargeService {

  CheckLogin:boolean=true

  AutoRecharge:boolean=false

  CurrentCustomer:Customer={phoneNumber:0, name:"", password:""}
  CurrentCustomerPlan:CurrentPlan={phoneNumber:0, price:0, data:0, voice:"-", sms:0, validity:0}
  NewCustomerPlan:CurrentPlan={phoneNumber:0, price:0, data:0, voice:"", sms:0, validity:0}

  AllCustomers:Customer[]=[]
  AllCustomerPlans:CurrentPlan[]=[]

  RechargeOptions:CurrentPlan[]=[
    {phoneNumber:0, price:10, data:1, voice:"Unlimited", sms:10, validity:10},
    {phoneNumber:0, price:20, data:1, voice:"Unlimited", sms:50, validity:30},
    {phoneNumber:0, price:50, data:2, voice:"Unlimited", sms:100, validity:80},
    {phoneNumber:0, price:200, data:4, voice:"Unlimited", sms:200, validity:180}
  ]

  CustomerBaseURL:string="https://localhost:7077/api/CustomerDetails"
  PlanBaseURL:string="https://localhost:7077/api/RechargeHistories"

  constructor(private http:HttpClient) { }

  GetAllCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.CustomerBaseURL)
  }

  PostNewCustomer(NewCustomer:Customer):Observable<void>{
    return this.http.post<void>(this.CustomerBaseURL,NewCustomer)
  }

  UpdateCustomer(Id:number,DummyCustomer:Customer):Observable<void>{
    return this.http.put<void>(this.CustomerBaseURL+"/"+Id,DummyCustomer)
  }

  GetAllCustomerPlan():Observable<CurrentPlan[]>{
    return this.http.get<CurrentPlan[]>(this.PlanBaseURL)
  }

  PostNewCustomerPlan(NewPlan:CurrentPlan):Observable<CurrentPlan>{
    return this.http.post<CurrentPlan>(this.PlanBaseURL,NewPlan)
  }
}
