import { Injectable, inject,signal } from '@angular/core';
import { GoogleClientId } from '../config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environments/environment';
import { IGoogleUser } from '../interfaces/google-user.interface';

const API_AUTH_URL = `${environment.apiURL}/api/auth/google-auth`;
declare const google: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  googleUser = signal<IGoogleUser | null>(null);

  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: GoogleClientId,
      callback: (response: any) => this.handleCredentials(response),
    });

     google.accounts.id.prompt();
    // google.accounts.id.renderButton(
    //   document.getElementById('google-signin-button'),
    //   { theme: 'outline', size: 'large' }
    // );
    return google;
  }
  handleCredentials(response: any) {
    console.log(response);
  }
}
