import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileRechargeService } from './Service/mobile-recharge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MobileRecharge';
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(['Login'])
  }
}
