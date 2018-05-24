import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    providers: [UserService]
})
export class UserListComponent implements OnInit {
    public users: User[] = [
        { id: 1, fullName: 'Julian Shah', email: 'julian_shah@gmail.com', age: 12, gender: 'Male', address: 'Surat, GJ'  },
        { id: 2, fullName: 'Justin Narola', email: 'justin_narola@gmail.com', age: 16, gender: 'Male', address: 'Pune, MH'  },
        { id: 3, fullName: 'Jeenita Patel', email: 'jeenita_patel@gmail.com', age: 20, gender: 'Female', address: 'Jaypur, RJ'  },
    ];

    public userList: User[];
    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userList = this.userService.getAllUsers();
    }

}
