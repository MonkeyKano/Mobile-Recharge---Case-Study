import { Component, OnInit } from '@angular/core';
import { MobileRechargeService } from '../Service/mobile-recharge.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public service:MobileRechargeService) { }

  ngOnInit(): void {
  }

}
