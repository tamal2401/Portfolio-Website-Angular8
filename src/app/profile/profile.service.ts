import { Injectable } from '@angular/core';
import { UserModel } from './userinfo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    async sendMail(user: UserModel) {
        return await this.http.post("https://java-mail-api.herokuapp.com/send/mail",
            user,
            {
                observe: 'response',
                responseType: 'json'
            })
            .toPromise();
    }
}