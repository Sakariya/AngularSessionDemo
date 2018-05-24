import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

export const appRoutes: Routes = [
    // Set root page of application
    {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
    },
    {
        path: '', children: [
            {
                path: 'user',
                component: UserListComponent
            }
        ]
    },
    {
        path: '', children: [
            {
                path: 'add-user',
                component: AddUserComponent
            }
        ]
    },
    // If page not found then
    {
        path: '**',
        redirectTo: '/user'
    }
];
