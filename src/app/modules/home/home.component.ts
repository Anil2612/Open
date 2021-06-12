import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isScroll: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

/**
  * Function used when scrolling the page.
  * Add navbar-inverse class for add ing properties to header
  */
  onWindowScroll() {
    let element = document.querySelector('.header-wrapper') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      this.isScroll = true;
    } else {
      element.classList.remove('navbar-inverse');
      this.isScroll = false;
    }
  }

}
