import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  collegue: Observable<Collegue>;

  constructor(private router: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {

    this.router.paramMap.subscribe((paramMap) => {

      const matricule = paramMap.get('matricule');

      this.collegue =  this.dataService.rechercherParMatricule(matricule);

    })
  }

}
