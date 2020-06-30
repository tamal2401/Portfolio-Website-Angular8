import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';
  showSpinner: boolean = false;

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    AOS.init();
    this.spinner.show();
    setTimeout(() => {
      this.showSpinner = true;
    }, 2000);
  }
}
