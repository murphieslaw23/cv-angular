import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    firstName: string;
    lastName: string;
    age: number;
    street: string;
    email: string;
    phone: string;
    photo: string;
    vacation: string;
    position: string;

    welcomeText: string;

    resumeURL: string;

    constructor() {
    }

    ngOnInit() {
        this.firstName = 'Erik';
        this.lastName = 'Milach';
        this.position = 'Frontend Developer';
        this.email = 'emilach82@gmail.com';
        this.phone = '+49 1520 5650080';
        this.street = 'Feldstr. 43A';
        this.vacation = '31.01.2018';
        this.photo = '../../assets/img/uploads/rs-photo-v1.jpg';
    }

}
