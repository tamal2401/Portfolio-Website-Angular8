import { Injectable } from '@angular/core';
import { UserModel } from './userinfo.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService{

    sendMail(user:UserModel){
        console.log(user)
    }
}