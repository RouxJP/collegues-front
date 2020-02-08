import { Component, OnInit } from '@angular/core';
import { listeMats } from '../mock/matricules.mock';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html'
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMatricules: Observable<String[]>;

  constructor() { }

  ngOnInit() {
  }

  rechercherParNom(nom: string) {
    console.log('saisie=', nom);
    this.listeMatricules = listeMats;
  }

}
