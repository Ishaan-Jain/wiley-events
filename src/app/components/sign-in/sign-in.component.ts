import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../User';
import { SignInService } from 'src/app/services/sign-in.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {catchError} from 'rxjs/operators'; 


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email: string = "";
  password: string = "";

  constructor(private signService: SignInService, private router: Router){
  }



  OnSubmit(){

    const newUser = {
      email: this.email,
      password: this.password
    }

    this.signService.login(newUser)
    .subscribe((res: HttpResponse<any>) =>{
      if(res.status === 200){
        this.router.navigate(['']);
      }
      
      // else if(res.status === 400){
      //   alert("Please check password or Register a new account")
      // }
    },
    (err: any) =>{
      alert("Please check login credentials or Register a new account")

    })

  }

}
