import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
     // Set root page of application
     {
      path: '',
      redirectTo: '/user',
      pathMatch: 'full'
  },
  {
      path: 'user',
      component: UserListComponent
  },
  {
      path: 'add-user',
      component: AddUserComponent
  },
  // If page not found then
  {
      path: '**',
      redirectTo: '/user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
