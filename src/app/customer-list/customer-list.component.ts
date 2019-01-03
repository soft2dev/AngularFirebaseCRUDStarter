import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private CustomerService: CustomerService) { }
  customerArray = [];
  ngOnInit() {
    this.CustomerService.getCustomers().subscribe(
      list => {
        this.customerArray = list.map(item =>{
          console.log({
            $key:item.key,
            ...item.payload.val()
          })
          return {
            $key:item.key,
            ...item.payload.val()
          };
        })
      }
    );
  }
  onDelete($key){
  if(confirm('Are you sure to delete this record?')){
    this.CustomerService.deleteCustomer($key);
  }
}
}
