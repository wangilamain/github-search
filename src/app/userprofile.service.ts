import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repo } from './repo';


import {user } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

baseURL: string = 'https://api.github.com'
fromURL: string = 'https://api.github.com'
  constructor(private http:HttpClient) { }

  getUserInfo(username:string): Observable<user[]> {
    return this.http.get<user[]>(this.fromURL + '/users/' + username);
  
}
  getUserRepos(username:string): Observable<repo[]> {
  return this.http.get<repo[]>(this.baseURL + '/users/' + username + '/repos');
  
}


}
