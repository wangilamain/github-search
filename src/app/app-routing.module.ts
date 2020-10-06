import { GhRepoComponent } from './gh-repo/gh-repo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhUsersComponent } from './gh-users/gh-users.component';

const routes: Routes = [

 {path: '', component: GhUsersComponent }, 
 {path: 'repo', component: GhRepoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
