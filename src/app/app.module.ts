import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './apropos/apropos.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';



const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent  },
  { path: 'gallerie', component: GallerieComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'detailCollegue/:matricule', component: DetailCollegueComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    MenuComponentComponent,
    AccueilComponent,
    GallerieComponent,
    AProposComponent,
    DetailCollegueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
