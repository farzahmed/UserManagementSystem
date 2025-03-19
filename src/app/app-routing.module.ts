import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; 
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';
// import { EditUserComponent } from './components/edit-user/edit-user.component';
// import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]                  
})
export class AppRoutingModule { }
