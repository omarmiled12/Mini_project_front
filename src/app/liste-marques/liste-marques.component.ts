import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { TvService } from '../services/tv.service';
@Component({
    selector: 'app-listenutritional',
    templateUrl: './liste-marques.component.html',
  })

export class ListeMarquesComponent implements OnInit {
    marques: Marque[] = [];
    ajout: boolean = true;
    updatedMarque: Marque = { idMar: 0, nomMar: '' };
  
    constructor(private tvService: TvService) {}
  
    ngOnInit(): void {
      this.chargerMarque();
    }
  
    chargerMarque(): void {
      this.tvService.listeMarques().
      subscribe(genres => {
        this.marques = genres._embedded.marques;
        console.log(genres);
      });
    }
  
    ajouterMarque(nouveauMarque: Marque): void {
      this.tvService.ajouterMarque(nouveauMarque);
      this.chargerMarque();
    }
  
    marqueUpdated(nt: Marque): void {
      if (this.ajout) {
        this.ajouterMarque(nt);
      } else {
        const index = this.marques.findIndex(marque => marque.idMar === nt.idMar);
        if (index !== -1) {
          this.marques[index] = nt;
        }
        this.ajout = true;
      }
      this.updatedMarque = { idMar: 0, nomMar: '' };
    }
  
    updateMar(nt: Marque): void {
      this.updatedMarque = { ...nt };
      this.ajout = false;
    }
  }