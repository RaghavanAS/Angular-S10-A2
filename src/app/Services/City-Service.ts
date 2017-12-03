import { Injectable } from '@angular/core';

@Injectable()
export class CityService {
  // CityList array
  CityList: string[]= [];
  // initializing the Citylist in constructor
  constructor() {
    this.CityList.unshift('Chennai');
    this.CityList.unshift('Bangalore');
    this.CityList.unshift('Hyderabad');
    this.CityList.unshift('Pune');
   }

   // returning the citylist
  getCityList(): string[] {
    return this.CityList;
  }
}
