import { environment } from './../environments/environment';
import { repo } from './repo';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) { 

  }

  getUserRepos(username:string): Observable<repo[]> {
    return this.http.get<repo[]>(this.baseURL + '/users/' + username + '/repos');
    
  }
}
