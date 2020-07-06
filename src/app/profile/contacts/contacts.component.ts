import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { UserModel } from '../userinfo.model';

declare let alertify:any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  model: any = {};
  user: UserModel = new UserModel();
  mailSent: boolean = false;

  @ViewChild('f', { static: false }) submitForm: NgForm;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.user.name = this.submitForm.value.name;
    this.user.sub = this.submitForm.value.subject;
    this.user.email = this.submitForm.value.email;
    this.user.msg = this.submitForm.value.message;
    this.profileService.sendMail(this.user).then(res => {
      // alertify.success("Mail sent successfully");
      alertify.notify('Mail sent successfully', 'success', 5);
    })
      .catch(error => {
        alertify.error("Mail Service unavailable");
      })
    this.submitForm.reset();
  }

}
