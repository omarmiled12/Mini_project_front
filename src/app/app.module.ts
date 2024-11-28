import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvsComponent } from './tvs/tvs.component';
import { AddTvComponent } from './add-tv/add-tv.component';
import { UpdateTvComponent } from './update-tv/update-tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { UpdateMarqueComponent } from './update-marque/updat-marque.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TvsComponent,
    AddTvComponent,
    UpdateTvComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent,
    LoginComponent,
    ListeMarquesComponent,
    UpdateMarqueComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule ,
    ReactiveFormsModule ,
    HttpClientModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
