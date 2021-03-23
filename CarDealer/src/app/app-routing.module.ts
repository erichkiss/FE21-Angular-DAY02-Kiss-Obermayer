import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { NewCarComponent } from './new-car/new-car.component';


const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "newCar", component: NewCarComponent },
  { path: "contact", component: ContactUsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
