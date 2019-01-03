import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  submitted:boolean;
  showSuccessMessage:boolean;
  constructor(private customerService:CustomerService) { }
  formControls = this.customerService.form.controls;
  ngOnInit() {
  }
  onSubmit(){
    this.submitted = true;
    if(this.customerService.form.valid){
      if(this.customerService.form.get('$key').value == null)
        this.customerService.insertCustomer(this.customerService.form.value);
        else
         this.customerService.updateCustomer(this.customerService.form.value);
    this.showSuccessMessage = true;
    setTimeout(() => this.showSuccessMessage = false, 3000)
    this.submitted = false;
    }
    console.log(this.submitted,this.customerService.form.valid);
    // //insert
    // else
    // //update
  }
}
