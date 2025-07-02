import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
  });
  
  loginFailed = false;

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
  if (this.loginForm.invalid) {
    this.loginFailed = true;
    return;
  }
  
  const { username, password } = this.loginForm.value;
  
  this.auth.login(username!, password!).subscribe({
    next: (res) => {
      // Store the token returned by backend
      this.auth.storeToken(res.token);

      this.loginFailed = false;
      this.router.navigate(['/home']);
    },
    error: () => {
      this.loginFailed = true;
    }
  });
}

  
}
