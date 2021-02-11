import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FeedComponent } from './feed/feed.component';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserPostDetailsComponent } from './user-post-details/user-post-details.component';

const routes: Routes = [
 // {  path: '', redirectTo: "register",   pathMatch: 'full'},
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
  },
    {
      path: 'feed',
     // canActivate: [AuthGuardService],
      component: FeedComponent,
    },
    {
      path: 'user-post-details/: id',
      //canActivate: [AuthGuardService],
      component: UserPostDetailsComponent ,
    },
    {
      path: 'followers',
      component: FollowersListComponent,
    },
    {
      path: '**', 
      component: PageNotFoundComponent,
    },
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 