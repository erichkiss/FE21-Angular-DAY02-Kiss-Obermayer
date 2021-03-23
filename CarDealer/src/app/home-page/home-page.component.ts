import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cars: Array<any> = [{
    title: "BMW Supersport",
    image: "../../assets/img/pexels-bmw.jpeg"
  },{
    title: "SLK Supersport",
    image: "../../assets/img/pexels-mercedes.jpeg"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}

