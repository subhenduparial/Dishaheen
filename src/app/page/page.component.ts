import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class PageComponent implements OnInit {

  page: Object;
  pageData={
    image: 'assets/page_1.jpg'
  }
  isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "Everfresh Flowers",
      image: "assets/logo_1.png"
    },
    {
      text: "Festive Deer",
      image: "assets/logo_2.png"
    },
    {
      text: "Morning Greens",
      image: "assets/logo_3.png"
    },
    {
      text: "Bunch of Love",
      image: "assets/logo_4.png"
    },
    {
      text: "Blue Clear",
      image: "assets/logo_5.png"
    },
    {
      text: "Everfresh Flowers",
      image: "assets/logo_1.png"
    },
    {
      text: "Festive Deer",
      image: "assets/logo_2.png"
    },
    {
      text: "Morning Greens",
      image: "assets/logo_3.png"
    },
    {
      text: "Bunch of Love",
      image: "assets/logo_4.png"
    },
    {
      text: "Blue Clear",
      image: "assets/logo_5.png"
    }
  ]
  
  constructor(private route: ActivatedRoute,private contentService: ContentService) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
  }

}
