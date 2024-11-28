import { Injectable } from '@angular/core';
import { Tv } from '../model/tv.model';
import { Marque } from '../model/marque.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL, apiURLMar } from '../config'
import { Observable } from 'rxjs';
import { MarqueWrapper } from '../model/marque.wrapper.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class TvService {

  tvs!: Tv[];
  Marques! : Marque[];
  tvsRecherche!: Tv[]; 

  constructor(private http: HttpClient) {}

  listeTv(): Observable<Tv[]> {
    return this.http.get<Tv[]>(apiURL);
  }

  ajouterTv(t: Tv): Observable<Tv> {
    return this.http.post<Tv>(apiURL, t, httpOptions);
  }

  supprimerTv(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterTv(id: number): Observable<Tv> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Tv>(url);
  }

  updateTv(t: Tv): Observable<Tv> {
    return this.http.put<Tv>(apiURL, t, httpOptions);
  }

  listeMarques():Observable<MarqueWrapper>{
    return this.http.get<MarqueWrapper>(apiURLMar);
  }

  rechercherParCategorie(idMar: number):Observable< Tv[]> {
    const url = `${apiURL}/gamesgenre/${idMar}`;
    return this.http.get<Tv[]>(url);
  }


  ajouterMarque( m: Marque):Observable<Marque>{
    return this.http.post<Marque>(apiURLMar, m, httpOptions);
  }

  trierTvs() {
    this.tvs = this.tvs.sort((n1, n2) => {
      if (n1.idTv! > n2.idTv!) {
        return 1;
      }
      if (n1.idTv! < n2.idTv!) {
        return -1;
      }
      return 0;
    });
  }
}
