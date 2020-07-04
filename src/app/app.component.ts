import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
    private spinner: NgxSpinnerService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    AOS.init();
    this.spinner.show();
    setTimeout(() => {
      this.showSpinner = true;
    }, 2000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 500) {
      this.document.getElementsByClassName("navbar")[0].classList.remove('navbar-transparent');
    }else if(document.documentElement.scrollTop < 500){
      this.document.getElementsByClassName("navbar")[0].classList.add('navbar-transparent');
    }
  }
}

