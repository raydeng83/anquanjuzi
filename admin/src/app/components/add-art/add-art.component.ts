import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Art} from '../../models/art';
import {ArtService} from '../../services/art.service';

@Component({
  selector: 'app-add-art',
  templateUrl: './add-art.component.html',
  styleUrls: ['./add-art.component.css']
})
export class AddArtComponent implements OnInit {
  artTypeList: SelectItem[];

  art = new Art();
  imageId;

  constructor(private artService: ArtService) {
    this.artTypeList = [
      {label: 'Select Type', value: null},
      {label: 'News', value: {id: 1, name: 'news'}},
      {label: 'Subject', value: {id: 2, name: 'subject'}}
    ];
  }

  onSubmitArt() {
    console.log(this.art);
    this.artService.sendArt(this.art).subscribe(
      res => {
        this.art = new Art();
      }
    );
  }

  onUpload(event) {
    console.log(event);
    const image = JSON.parse(event.xhr.response);
    this.imageId = image.id;
    this.art.imageId = image.id;
  }

  ngOnInit() {
  }

}
