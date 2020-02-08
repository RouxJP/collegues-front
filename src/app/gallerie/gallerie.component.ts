import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { PhotoCollegue } from '../photo-collegue';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  listePhotosCollegues: Observable<PhotoCollegue[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.listePhotosCollegues = this.dataService.rechercherDesPhotos()
      .pipe(
        map(
          listePhotoCol => listePhotoCol.filter(pc => pc.photUrl && pc.photUrl.startsWith('http'))
        )
      );
  }

}
