import { Injectable } from '@angular/core';
import { listeMats } from '../mock/matricules.mock';
import { colMockCourant } from '../mock/collegue.mock';
import { Collegue } from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const urlPosts = 'https://btoulemonde-collegues-api.herokuapp.com/collegues?nom=';

@Injectable({
  providedIn: 'root'
})

export class DataService {

    constructor(private httpClient: HttpClient) { }


    rechercherParNom( nom: string): Observable<String[]> {
 
      const obs$: Observable<String[]> = this.httpClient.get<String[]>(urlPosts + nom);
  
      return obs$;      

    }
      
    recupererCollegueCourant():Collegue{
      // TODO retourner le collègue fictif à partir du fichier`src/app/mock/collegues.mock.ts`.
      return colMockCourant ;      
    }

  }
