import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    public user: User;

    public userForm: FormGroup = this.builder.group({
        fullName: ['', [Validators.minLength(5), Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        age: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        address: ['', [Validators.required]]
    });

    constructor(
        private builder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
    }

    public addUser() {
        console.log('userForm --->>> ', this.userForm);
        alert('Form Submitted');
        this.router.navigateByUrl('/');
    }

}
