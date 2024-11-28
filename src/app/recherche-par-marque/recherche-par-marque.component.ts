import { Component, OnInit } from '@angular/core';
import { TvService } from '../services/tv.service';
import { Tv } from '../model/tv.model';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent implements OnInit {
  tvs: Tv[] | undefined  // Initialize as an empty array
  marques: Marque[] | undefined  // Initialize as an empty array
  IdMarque: any;

  constructor(private tvService: TvService) {}

  ngOnInit(): void {
    // this.marques = this.tvService.listeMarques();
    // this.tvs = this.tvService.listeTvs();
  }

  // onchange(){
  //   this.tvs=
  //   this.tvService.rechercherParMarque(this.IdMarque);
  // }

  // supprimerTv(t: Tv): void {
  //   const conf = confirm('Etes-vous sûr ?');
  //   if (conf) {
  //     this.tvService.supprimerTv(t);
  //     this.onchange(); // Refresh the list after deletion
  //   }
  // }
}
