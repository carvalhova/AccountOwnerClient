import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddPipe, DifferencePipe, CalendarPipe } from 'ngx-moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private calendarPipe: CalendarPipe,
    private addPipe: AddPipe,
    private differencePipe: DifferencePipe ) {}

  public login(email: string, password: string) {

  }

  private setSession(authResult) {
    const expiresAt = this.addPipe.transform(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    // return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    // const expiration = localStorage.getItem('expires_at');
    // const expiresAt = JSON.parse(expiration);
    // const now = this.calendarPipe.transform()
    // return moment(expiresAt);
  }
}
