import { Component, OnInit, NgZone } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { environment } from 'src/environments/environment';
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: any = FormGroup;

    submitted = false;

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

    get f() { return this.loginForm.controls; }

    async handleCredentialResponse(response: CredentialResponse) {
        await this.service.loginWithGoogle(response.credential).subscribe(
            (x:any) => {
                localStorage.setItem("token", x.token);
                this._ngZone.run(() => {
                    this.router.navigate(['/logout']);
                })},
            (error:any) => {
                console.log(error);
            }
        );
    }

    async onSubmit() {
        //this.formSubmitAttempt = false;
        if (this.loginForm.valid) {
            try {
                this.service.login(this.loginForm.value).subscribe((x: any) => {
                        this.router.navigate(['/logout']);
                        this._snackBar.open("Login Successful", "Close", {
                            duration: 2000
                        });
                    },
                    (error: any) => {
                        console.error(error);
                        this._snackBar.open("Error with Username or Password", "Close", {
                            duration: 5000
                        });
                    });
            } catch (err) {
                this._snackBar.open("Error with Username or Password", "Close", {
                    duration: 5000
                });
            }
        } else {
            //this.formSubmitAttempt = true;
        }
    }
}
