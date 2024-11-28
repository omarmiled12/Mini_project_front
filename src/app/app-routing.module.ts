import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvsComponent } from './tvs/tvs.component';
import { AddTvComponent } from './add-tv/add-tv.component';
import { UpdateTvComponent } from './update-tv/update-tv.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TvGuard } from './tv.guard';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
const routes: Routes = [
  { path: 'tvs', component: TvsComponent },
  { path: 'add-tv', component: AddTvComponent ,canActivate:[TvGuard]},
  { path: 'update-tv/:id', component: UpdateTvComponent }, // Route with ID parameter
  { path: '', redirectTo: '/tvs', pathMatch: 'full' }, // Default route
 {path : 'rechercheParMarque', component:RechercheParMarqueComponent},
 {path: "rechercheParNom", component : RechercheParNomComponent},
 {path: 'login', component: LoginComponent},
 {path: 'app-forbidden', component: ForbiddenComponent},
 {path: "ListeMarques", component : ListeMarquesComponent},



];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
