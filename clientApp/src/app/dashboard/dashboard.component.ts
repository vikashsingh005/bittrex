import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  dataJSON =[{ "Market":"BTC-ZEN", "Currency":"Zencash", "Volume":"217.043", "Changes":"-11.0%", "LastPrice": "0.00279140", "High":"0.00318628", "Low":"0.00269720", "Spread":"0.6%", "Added":"06/05/2017", "img":"bitcoin.png", "Status":"Biggest % Gain" },
  { "Market":"BTC-ZEC",  "Currency":"Zcash", "Volume":"712.355", "Changes":"-8.5%", "LastPrice": "0.352558", "High":"0.00556525", "Low":"0.02525856", "Spread":"0.7%", "Added":"10/28/2016", "img":"bitcoin.png", "Status":"Top Volume" },
  { "Market":"BTC-ZCL",  "Currency":"Zclassic", "Volume":"186.442", "Changes":"15.6%", "LastPrice": "0.0065268", "High":"0.025125", "Low":"0.2022514", "Spread":"0.4%", "Added":"11/16/2016", "img":"bitcoin.png", "Status":"Biggest % Gain" },
  { "Market":"BTC-XZC",  "Currency":"WhiteCoin", "Volume":"2322.776", "Changes":"41.3%", "LastPrice": "0.00425156", "High":"0.215205", "Low":"0.0025155", "Spread":"0.2%", "Added":"02/18/2016", "img":"bitcoin.png", "Status":"Top Volume" },
  {  "Market":"BTC-XVG", "Currency":"Verge", "Volume":"33.618", "Changes":"5.7%", "LastPrice": "0.0002553", "High":"0.0202155", "Low":"0.0254858", "Spread":"3.8%", "Added":"12/23/2014", "img":"bitcoin.png", "Status":"Top Volume" }];

  constructor() { }

  ngOnInit() {
  }

}
