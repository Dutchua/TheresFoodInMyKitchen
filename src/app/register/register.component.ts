import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {PromptMomentNotification} from "google-one-tap";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any = FormGroup;

  constructor(
    private router: Router,
    private service: AuthService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      try {
        this.service.register(this.registerForm.value).subscribe((x: any) => {
            this.router.navigate(['/']);
          },
          (error: any) => {
            console.error(error);
            this._snackBar.open("An error occurred while creating your account", "Close", {
              duration: 5000
            });
          });
      } catch (err) {
        this._snackBar.open("An error occurred while creating your account", "Close", {
          duration: 5000
        });
      }
    } else {
    }
  }

}
