import { Component } from '@angular/core';
import { Collegue } from './models/Collegue';


@Component({
  selector: 'app-root', // balise
  templateUrl: './app.component.html' // vue
})
export class AppComponent {

  nombreMessage = 2;

  title = 'collegues-front';
  afficherCol = true;

  unCollegue = new Collegue('mat1', 'Hugues', 'Richard', 'X@Y.fr', new Date(),
    'http://www.coachsetassocies.com/wp-content/uploads/2019/01/photo-inconnu-femme.png');

  tabCols = [
    new Collegue('mat1', 'X1', 'Y1', 'X@Y.fr', new Date(),
      'http://www.coachsetassocies.com/wp-content/uploads/2019/01/photo-inconnu-femme.png'),
    new Collegue('mat1', 'X2', 'Y2', 'X@Y.fr', new Date(),
      'http://www.coachsetassocies.com/wp-content/uploads/2019/01/photo-inconnu-femme.png'),
    ];

  listeCols: Promise<Collegue>;

  donneeAsync:Promise<string>;

  donnees: string;

  afficherMasquer() {
    this.nombreMessage++;
    this.afficherCol = !this.afficherCol;

    this.envoyerRequete();
    // ..

  }

  envoyerRequete() {

    new Promise(resolve => {
      // promesse résolue après 1s
      window.setTimeout(() => resolve('bonjour async'), 5000);
      }).then((data: string) => {

        this.donnees = data;

      });

   this.listeCols = fetch('https://darssn.herokuapp.com/collegues')
    .then(resp => resp.json());

  }

}
