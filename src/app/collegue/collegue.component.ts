import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

  // <app-collegue [col]="dddd"></app-collegue>
  @Input() col: Collegue;

  modeEdition = false;

  prenomSaisie:string;
  emailSaisie:string;
  urlSaisie:string;

  constructor() { }

  ngOnInit() {
  }

  prenomChange(prenomSaisie :string) {
    this.prenomSaisie = prenomSaisie;
  }

  emailChange( emailSaisi :string, saisiePhoto: HTMLInputElement) {
    this.emailSaisie = emailSaisi;
    saisiePhoto.focus();
    //console.log(emailSaisi)
  }

  urlChange( urlSaisie :string) {
    this.urlSaisie = urlSaisie ;
  }

  modifierCollegue(){
    this.modeEdition = true;

    console.log('Modif');
  }

  onMouse() {
    console.log('souris!!!')
  }

  validerCollegue() {
    this.modeEdition = false;
  }

  creerCollegue() {
    console.log('Creation');
  }

}
