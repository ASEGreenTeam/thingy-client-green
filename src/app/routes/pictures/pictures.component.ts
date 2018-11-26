import {Component, OnInit} from '@angular/core';
import {Lightbox} from 'ngx-lightbox';
import { RestService } from '../../rest.service';
import { Log } from '../../shared/models/log.model';


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
   _album: any[] = [];
   images: any[] = [];



  constructor(public rest: RestService, private _lightbox: Lightbox) {
    this.getLogs();
  }

  getLogs() {
    this.rest.getLogs().subscribe((data: Log[]) => {
      for (let log of data) {
        console.log(log.imagePath);
        if (log.imagePath) {
          this.images.push({ imagePath: log.imagePath, timestamp: log.timestamp });
        }
      };
      this.setupGallery();
    });

  }

  setupGallery() {
    const path: String = 'http://localhost:3000/';
    // need a rest function that gives path of pictures
    console.log(this.images);
    for (let key in this.images) {
        let img = this.images[key];
        console.log(img);
        const src = `${path}${img.imagePath}`;
        const caption = 'Image ' + img.imagePath + ' caption here';
        const thumb = src;
        const album = {
            src: src,
            caption: caption,
            thumb: thumb,
            timestamp: img.timestamp,
        };

        this._album.push(album);
    }
  }

  open(index: number): void {
      // open lightbox
      this._lightbox.open(this._album, index);
  }


  close(): void {
      // close lightbox programmatically
      this._lightbox.close();
  }
  ngOnInit() {
  }

}
