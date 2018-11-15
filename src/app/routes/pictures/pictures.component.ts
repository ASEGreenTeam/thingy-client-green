import {Component, OnInit} from '@angular/core';
import {Lightbox} from 'ngx-lightbox';


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
   _album: any[] = [];

  constructor(private _lightbox: Lightbox) {
      for (let i = 0; i <= 4; i++) {
          const src = 'assets/img/bg' + i + '.jpg';
          const caption = 'Image ' + i + ' caption here';
          const thumb = 'assets/img/bg' + i + '.jpg';
          const album = {
              src: src,
              caption: caption,
              thumb: thumb
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
