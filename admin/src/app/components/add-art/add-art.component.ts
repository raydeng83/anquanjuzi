import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-add-art',
  templateUrl: './add-art.component.html',
  styleUrls: ['./add-art.component.css']
})
export class AddArtComponent implements OnInit {
  artTypeList: SelectItem[];
  selectedArtType;
  date: Date;
  text: string;

  constructor() {
    this.artTypeList = [
      {label: 'Select Type', value: null},
      {label: 'News', value: {id: 1, name: 'news'}},
      {label: 'Subject', value: {id: 2, name: 'subject'}}
    ];
  }

  ngOnInit() {
  }

}
