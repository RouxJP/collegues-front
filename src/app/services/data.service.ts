import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { PhotoCollegue } from '../photo-collegue';


const url = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  rechercherMatriculeParNom(nom: string): Observable<string[]> {

    return this.httpClient.get<string[]>(url + '?nom=' + nom);

  }

  ajouterCollegue(newCollegue: Collegue): Observable<void> {
    console.log( url)
    console.log( newCollegue)
    return this.httpClient.post<void>(url, newCollegue);
  }

  rechercherDesPhotos(): Observable<PhotoCollegue[]> {
    return this.httpClient.get<PhotoCollegue[]>(url + '/photos');
  }

  rechercherParMatricule(matricule: string): Observable<Collegue> {
    return this.httpClient.get<Collegue>(url + '/' + matricule);
  }

}
