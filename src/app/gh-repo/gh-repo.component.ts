import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { GithubService } from './../github.service';
import { UserprofileService } from './../userprofile.service';
import { user } from './../user';
import { repo } from './../repo';
import { Observable} from 'rxjs';;

@Component({
  selector: 'app-gh-repo',
  templateUrl: './gh-repo.component.html',
  styleUrls: ['./gh-repo.component.css'],
  providers: [GithubService, UserprofileService]
})
export class GhRepoComponent implements OnInit {
  profile: user[];
  repos: repo[];
  username: string;
  errorMessage;

  constructor(private Userprofile: UserprofileService , private githubService: GithubService) { } 

  public getUserRepos(event: any) {
    
    let promise = new Promise((resolve , reject) => {
     this.githubService.getUserRepos (this.username).toPromise().then(response => {
       this.repos = response; 
        resolve();
        console.log ('data', resolve)
      },
      error => {
        this.errorMessage = 'An error was encountered';
      }
    );
    });
    return promise;
  }

  ngOnInit(): void {
  }

}
