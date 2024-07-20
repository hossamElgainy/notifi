import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { NotificationComponent } from './Notification/notification/notification.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
{ path:"login",component:LoginComponent},
{ path:"notification",component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
