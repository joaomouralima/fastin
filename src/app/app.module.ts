import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary, } from '@fortawesome/angular-fontawesome';
import { faSquare, faCocktail, faGuitar, faFilm, faFemale, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  { path: 'events', component: EventsComponent },
  { path: 'payment/:id', component: PaymentDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    PaymentDetailsComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  entryComponents: [EventsComponent, PaymentDetailsComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCocktail, faGuitar, faFilm, faFemale, faPizzaSlice);
  }
}

