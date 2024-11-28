import { Component, OnInit } from '@angular/core';
import { TvService } from '../services/tv.service';
import { Tv } from '../model/tv.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
})
export class TvsComponent implements OnInit {
  tvs!: Tv[];

  constructor(private tvService: TvService, public authService : AuthService) {}
  
  ngOnInit(): void {
    this.chargerTvs();
    }
    chargerTvs(){
    this.tvService.listeTv().subscribe(tvs => {
    console.log(tvs);
    this.tvs = tvs;
    });
    }
    supprimerTv(t: Tv)
    {
   
    this.tvService.supprimerTv(t.idTv).subscribe(() => {
    console.log("tv supprimé");
    this.chargerTvs();
    });
    } 
}
