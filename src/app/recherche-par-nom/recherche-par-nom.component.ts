import { Component, OnInit } from '@angular/core';
import {  Tv } from '../model/tv.model';
import {  TvService } from '../services/tv.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  allTvs!: Tv[];
  searchTerm!: string;
  tvs: Tv[] = [];

  constructor(private tvService: TvService) {}

  ngOnInit(): void {
    // Directly assign the result from the service without subscribing
    // this.allTvs = this.tvService.listeTvs();
  }

  recherchertvvs() {
    // Call the method directly to filter supplements
    // this.tvs = this.tvService.rechercherParNom(this.searchTerm);
  }

  onKeyUp(filterText: string) {
    this.tvs = this.allTvs.filter(item =>
      item.nomTv?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}