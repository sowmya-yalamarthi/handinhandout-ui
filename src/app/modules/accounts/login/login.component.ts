import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  loading = false;
  submitted = false;
  isLoginSucessFull: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: AppserviceService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  ngOnInit(): void {


  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const value = this.loginForm.getRawValue();
    //console.log(value)
    const reqObj = {
      userName: value.username,
      password: value.password
    }

    this.serviceService.getUser(reqObj).subscribe(data => {
      if (data) {
        this.isLoginSucessFull = true;
      } else {
        this.isLoginSucessFull = false;
      }
    },
      (err) => {
        this.isLoginSucessFull = false;
      }
    )

  }

  navigateToRegister() {
    this.router.navigate(["/register"])
  }


}
