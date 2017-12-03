import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
  // CustomerList array of customer
  CustomerList: Customer[]= [];
  constructor() {}
  // return the CustomerList
  getCustomerList(): Customer[] {
    return this.CustomerList;
  }
  // stores a customer in the CustomerList
  storeCustomer(customer: Customer) {
      this.CustomerList.unshift(customer);
      console.log(this.CustomerList);
  }
}
