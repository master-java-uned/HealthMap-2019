import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AutAuthorities';
const USERID_KEY = 'AuthUserId';


@Injectable({
   providedIn: 'root'
})
export class TokenService {
   roles: Array<string> = [];


   constructor() { }


   public sesion_setToken(token: string): void {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
   }


   public sesion_getToken(): string {
      return sessionStorage.getItem(TOKEN_KEY);
   }


   public sesion_setUserName(userName: string): void {
      window.sessionStorage.removeItem(USERNAME_KEY);
      window.sessionStorage.setItem(USERNAME_KEY, userName);
   }


   public sesion_getUserName(): string {
      return sessionStorage.getItem(USERNAME_KEY);
   }


   public sesion_setUserId(userId: bigint): void {
      window.sessionStorage.removeItem(USERID_KEY);
      window.sessionStorage.setItem(USERID_KEY, JSON.stringify(userId));
   }


   public sesion_getUserId(): bigint {
      return JSON.parse(sessionStorage.getItem(USERID_KEY));
   }


   public sesion_setAuthorities(authorities: string[]): void {
      window.sessionStorage.removeItem(AUTHORITIES_KEY);
      window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
   }


   public sesion_getAuthorities(): string[] {
      this.roles = [];
      if (sessionStorage.getItem(AUTHORITIES_KEY)) {
         JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
            this.roles.push(authority.authority);
         });
      }
      return this.roles;
   }


   public sesion_logOut(): void {
      window.sessionStorage.clear();
   }
}
