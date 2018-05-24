import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

    constructor() { }

    getAllUsers(): User[] {
        return [
            { id: 1, fullName: 'Jeemit Shah', email: 'jeemit_shah@gmail.com', age: 12, gender: 'Male', address: 'Jaypur, RJ' },
            { id: 3, fullName: 'Manisha Patel', email: 'manisha_patel@gmail.com', age: 12, gender: 'Female', address: 'Surat, GJ'  },
            { id: 2, fullName: 'Krunal Narola', email: 'krunal_narola@gmail.com', age: 12, gender: 'Male', address: 'Pune, MH'  },
        ];
    }

}
