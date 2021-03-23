import { Component, OnInit, DoCheck } from '@angular/core';
import { cars } from '../array';
import { NewCarComponent } from '../new-car/new-car.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, DoCheck {
  cars = cars;
  constructor() { }

  ngDoCheck(): void{
    this.cars = new NewCarComponent().returnCars();
  }


  ngOnInit(): void {
    
  }

}

