import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

    isLoginMode=true;
    constructor(private authService: AuthService,
                private router : Router) { }
    isLoading=false;
    error:string=null;

    ngOnInit() { 

    }

    onSwitchMode(){
        this.isLoginMode=!this.isLoginMode;
    }

    onSubmit(form: NgForm){
        if(!form.valid){
            return;
        }
        const email= form.value.email;
        const password= form.value.password;

        let authObserver : Observable<AuthResponseData>;
        this.isLoading=true;
        
        if (this.isLoginMode){
            authObserver =this.authService.login(email,password);
        }
        else{
            authObserver=this.authService.signup(email,password);    
        }
        authObserver.subscribe(
            resData=>{
                console.log(resData);
                this.isLoading=false;
                this.router.navigate(['/recipes']);
                
            },errorMessage=>{
                console.log(errorMessage);
                this.error=errorMessage;
                this.isLoading=false;                
            }
        );

        form.reset();
    }
}