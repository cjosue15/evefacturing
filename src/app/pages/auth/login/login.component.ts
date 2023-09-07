import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Subject, of, switchMap, takeUntil, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService, Credential } from '@core/services/auth.service';
import { Router } from '@angular/router';

interface LoginForm {
  email: FormControl<null | string>;
  password: FormControl<null | string>;
}

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  selector: 'eve-log-in',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss'],
})
export default class LogInComponent implements OnInit, OnDestroy {
  hide = true;

  formLogin: FormGroup<LoginForm>;

  private _formBuilder = inject(FormBuilder);

  private _authService = inject(AuthService);

  private _nextCredential$ = new Subject<Credential>();

  private _unsuscribe$ = new Subject<void>();

  private _router = inject(Router);

  constructor() {
    this.formLogin = this._formBuilder.group({
      email: this._formBuilder.control<string | null>(null, [
        Validators.required,
        Validators.email,
      ]),
      password: this._formBuilder.control<string | null>(
        null,
        Validators.required
      ),
    });
  }

  ngOnInit(): void {
    this._nextCredential$
      .pipe(
        switchMap((credential: Credential) =>
          this._authService.logIn(credential).pipe(
            catchError((error) => {
              console.log(error);

              throw 'error in source. Details: ' + error;
              // return throwError(error);
            })
          )
        ),
        takeUntil(this._unsuscribe$)
      )
      .subscribe({
        next: (credential) => {
          console.log(credential);
          const data = this._authService.encryptToken(credential);
          this._authService.saveToken(data);
          this._router.navigateByUrl('/');
        },
        error: (error) => console.log(error),
      });
  }

  logIn(): void {
    if (this.formLogin.invalid) return;

    const credential: Credential = {
      email: this.formLogin.value.email || '',
      password: this.formLogin.value.password || '',
    };

    this._nextCredential$.next(credential);
  }

  ngOnDestroy(): void {
    this._unsuscribe$.next();
  }
}
