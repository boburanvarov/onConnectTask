import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  phide = true;
  constructor(private router: Router) { }
  

  ngOnInit(): void {

  }
 
  form=new FormGroup({
    login :new FormControl('', [Validators.required]),  
    password :new FormControl('', [Validators.required])
  })
  
  get login(){
    return this.form.get('login');
  }

  get password(){
    return this.form.get('password');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  create() {

    if(this.login?.value ==='admin' && this.password?.value ==='admin'){
      this.router.navigate(['cabinet'])
    }
    // console.log('ok');
    // console.log(this.login?.value);
    
  }

  

}
