import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  carData: any;

  newCar = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('', Validators.required)
  });

  constructor() { }

  onSubmit() {
    if (this.newCar.valid) {
      this.carData = this.newCar.value;
      console.log(this.carData);
    }
  }

  ngOnInit(): void {
  }
}