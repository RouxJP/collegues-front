import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})


export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  modeEdition = false;
  emailSaisie: string;
  photoSaisie: string;

  constructor( ) { }

  modifierCollegue() {

    this.modeEdition = true;
    console.log('Modification du collègue');
  }

  creerCollegue() {
    console.log('Création d’un nouveau collègue');
  }
  emailChange(valeurSaisie: string) {
    this.emailSaisie = valeurSaisie;
  }
  photoChange(adresseSaisie: string){
    this.photoSaisie = adresseSaisie;
  }

  validerLEdition() {
    this.modeEdition = false;
    console.log('Validation du collègue');
  }

  ngOnInit() {
  }

}
