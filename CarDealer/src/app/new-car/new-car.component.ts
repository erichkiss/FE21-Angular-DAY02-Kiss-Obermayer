import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cars } from '../array';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  carData: any;
  homepageCars: any = cars;

  newCar = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('', Validators.required)
  });

  constructor() {
  }

  onSubmit() {
    if (this.newCar.valid) {
      this.carData = this.newCar.value;
      // console.log(this.carData);
      // this.homepageCars = new HomePageComponent().cars;
      this.homepageCars.push(this.carData);
      console.log(this.homepageCars);
      // HomePageComponent.cars.push(this.carData);
    }
  }

  returnCars(){
    return this.homepageCars;
  }

  ngOnInit(): void {
  }
}