import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service:AuthService,
    private toastr:ToastrService,
    private router:Router) {
    
  }
  ngOnInit(): void {
    this.createForm();
  }
  
  createForm() {

    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: [
        '',
       [ Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)]
      ]
    });
  }
  login() {
    var observer={
      next:(result:any)=>{
        localStorage.setItem("token",result.data.token);
        this.toastr.success("success","Login Success");
        this.router.navigate(['/notification']);
        console.log(result);        
        //this.spinner.hide();
      },error:(error:Error)=>{
        this.toastr.error("error","Invalid Creadintials");
        console.log(error);
      }
    };
    let formData = new FormData();
    formData.append('Email',this.loginForm.value['Email']);
    formData.append('Password',this.loginForm.value['Password']);
    //this.spinner.show();
    this.service.Login(formData).subscribe(observer);
  }
}
