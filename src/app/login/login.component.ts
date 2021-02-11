import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { UserService } from '../services/user.service';

export class LoginData {
email: string;
password: string;

constructor(email: string, password: string) {
  this.email = email;
  this.password = password;
}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submittedPressed = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
    });
  }
    
    prefillForm() {
      this.loginForm.patchValue({
        email: 'name@company.domain'
      });
    }

    submit(): void {
      this.submittedPressed = true;
      if (this.loginForm.invalid) {
        return;
      }
      localStorage.setItem("token", "response");
      this.userService.addFirstName("User");
   

      this.accountService.login(this.loginForm.value).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.token);
      //TO DO backend! login response should return firstname too
        this.userService.addFirstName(response.firstName);
    
    })

     // const loginData1: LoginData = new LoginData(
      //  this.email.value,
      //  this.password.value
    //  );

    //  console.log(loginData1);
  }
  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

}
