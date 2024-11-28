import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvService } from '../services/tv.service';
import { Tv } from '../model/tv.model';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator'; 

@Component({
  selector: 'app-update-tv',
  templateUrl: './update-tv.component.html',
  styleUrls: ['./update-tv.component.css']
})
export class UpdateTvComponent implements OnInit {

  currentTv = new Tv();
  marques!: Marque[];
  updatedMarId!: number;
  updateTvForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private tvService: TvService,
    private formBuilder: FormBuilder) { }


    ngOnInit(): void {
      this.tvService.listeMarques().
      subscribe(marques => {console.log(marques);
      this.marques = marques._embedded.marques;
      }
      );
    this.tvService.consulterTv(this.activatedRoute.snapshot.params['id']).subscribe(tv => {
      this.currentTv = tv;
      this.updatedMarId = this.currentTv.marque.idMar;
    });

    this.updateTvForm = this.formBuilder.group({
      email: [this.currentTv.email, [Validators.required, emailValidator()]],
      nomTv: [this.currentTv.nomTv, [Validators.required, Validators.minLength(3)]],
      prixTv: [this.currentTv.prixTv, [Validators.required]],
      dateCreation: [this.currentTv.dateCreation, [Validators.required]],
    });
  }

  emailInvalid(): boolean {
    const email = this.updateTvForm.get('email')?.value;
    return email && !(email.includes('@') && email.includes('.com'));
  }

  updateTv() {
    this.currentTv.marque = this.marques.
    find(marque => marque.idMar == this.updatedMarId)!;
  this.tvService.updateTv(this.currentTv).subscribe(game => {
    this.router.navigate(['tvs']);
  });
}}

