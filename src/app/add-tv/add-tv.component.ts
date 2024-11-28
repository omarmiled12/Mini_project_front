import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TvService } from '../services/tv.service';
import { Tv } from '../model/tv.model';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator'; 

@Component({
  selector: 'app-add-tv',
  templateUrl: './add-tv.component.html',
})
export class AddTvComponent implements OnInit {

  newTv = new Tv();
  marques!: Marque[];
  newIdMarque !: number;
  newmarque !: Marque;
  addTvForm!: FormGroup;

  constructor(private tvService: TvService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  
    ngOnInit(): void {
      this.tvService.listeMarques().
      subscribe(marques => {console.log(marques);
      this.marques = marques._embedded.marques;
      });

    this.addTvForm = this.formBuilder.group({
      IdTv: ['', [Validators.required, Validators.minLength(1)]],
      nomTv: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, emailValidator()]],
      prixTv: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],
      idMar: ['', [Validators.required]]
    });
  }

  addTv() {
   this.newTv.idTv = this.addTvForm.value.idTv;
   this.newTv.nomTv = this.addTvForm.value.nomTv;
   this.newTv.prixTv = this.addTvForm.value.prixTv;
   this.newTv.dateCreation = this.addTvForm.value.dateCreation;
 
   this.newTv.marque = this.marques.find(
    marque => marque.idMar == this.addTvForm.value.idMar
   )!;
 
   this.tvService.ajouterTv(this.newTv).subscribe(
     tv => {
       console.log('Tv added:', tv);
       this.router.navigate(['tvs']);
     },
     error => {
       console.error('Error adding tv:', error);
     }
   );
}
}