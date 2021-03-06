import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { environment } from '../../../environments/environment';
import { RespondentService } from './respondent.service';

@Injectable()
export class AuthRespondentService {

  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get isLoggedInMap(): boolean {
    return !!this.getToken();
  }

  get isLoggedIn(): Observable<boolean> {
    this.isLoggedIn$.next(!!this.getToken());
    return this.isLoggedIn$.asObservable();
  }

  constructor(private router: Router, private http: HttpClient, private respondentService: RespondentService) {
  }

  logout() {
    this.removeToken();
    this.isLoggedIn$.next(false);
  }

  onSuccessLogin(access_token: string) {
    this.http.post(environment.api.auth.facebook.respondent, { access_token })
      .subscribe((response: any) => {
        const token = response.token;

        if (token) {
          this.saveToken(token);
          this.router.navigate(['/test/' + this.respondentService.activationId]);

        } else {
          console.error('Server error'); // TODO: handle errors
        }
      });
  }

  saveToken(token: string) {
    localStorage.setItem('respondent-token', `Bearer ${token}`);
  }

  getToken(): string {
    return localStorage.getItem('respondent-token');
  }

  removeToken() {
    localStorage.removeItem('respondent-token');
  }
}
