import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {CredentialResponse, PromptMomentNotification} from 'google-one-tap';
import {environment} from 'src/environments/environment';
import {AuthService} from "../auth.service";
import {Login} from "../model/Login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup;

  private clientId = environment.clientId

  constructor(
    private router: Router,
    private service: AuthService,
    private _ngZone: NgZone,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "1000px"}
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  async handleCredentialResponse(response: CredentialResponse) {
    this.service.loginWithGoogle(response.credential).subscribe(
      {
        next : (x:any) => {
          localStorage.setItem("token", x.token);
          this._ngZone.run(() => {this.router.navigate(['/'])});
        },
        error : (error:any) => {
          console.log(error);
        }
      }
    );
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe({
        next: (x:Login) => {this.router.navigate(['/']);},
        error: (error: any) => {
          console.error(error);
          this._snackBar.open("Error with Username or Password", "Close", {
            duration: 5000
          });
        }
      });
    }
  }
}
