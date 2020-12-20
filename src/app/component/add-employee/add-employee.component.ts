import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosServiceService } from '../usuarios-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  imageUrl:any;
  addEmployeeForm= new FormGroup({
    firstName:new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    photo: new FormControl()
  })
  constructor(private _service:UsuariosServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  ChangeUrl(value){
    this.imageUrl = value
  }
  AddEmployee(){
    let params = {
      firstname:this.addEmployeeForm.get('firstName').value,
      lastName:this.addEmployeeForm.get('lastName').value,
      email:this.addEmployeeForm.get('email').value,
      photo:this.addEmployeeForm.get('photo').value
    }
    this._service.addEmployee(params).subscribe(res=>{
      if(res){
        this.router.navigate(['/list']);
      }
    })
  }
}
