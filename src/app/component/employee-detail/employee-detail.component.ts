import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosServiceService } from '../usuarios-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  mode:any;
  employeeDetail:any;
  constructor(private _services:UsuariosServiceService,
    private route:ActivatedRoute, 
    private router:Router) { }
    editEmployeeForm= new FormGroup({
      firstName:new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      photo: new FormControl()
    })
  ngOnInit(): void {
    this.mode = "Detail";
    this._services.getSingleUsuarios(this.route.snapshot.params['id']).subscribe(res=>{
      this.employeeDetail=res['data']
    })
  }
  ChangeUrl(value){
    this.employeeDetail.avatar = value
  }

  updateEmployee(){
    this.mode = "Update";
    this.editEmployeeForm.setValue({
      firstName: this.employeeDetail.first_name,
      lastName: this.employeeDetail.last_name,
      email: this.employeeDetail.email,
      photo: this.employeeDetail.avatar
    })
  }
  deleteEmployee(){
    this._services.deletEmployee(this.route.snapshot.params['id']).subscribe(res=>{
      
        this.router.navigate(['/list'])
    })
  }

  editEmployee(){
    let params = {
      firstname:this.editEmployeeForm.get('firstName').value,
      lastName:this.editEmployeeForm.get('lastName').value,
      email:this.editEmployeeForm.get('email').value,
      photo:this.editEmployeeForm.get('photo').value
    }
    this._services.editEmployee(params,this.route.snapshot.params['id']).subscribe(res=>{
      if(res){
        this.router.navigate(['/list'])
      }
    })
  }
}
