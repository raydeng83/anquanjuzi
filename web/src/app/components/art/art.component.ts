import { Component, OnInit } from '@angular/core';
import {ArtService} from '../../services/art.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  artContent;
  artId;

  constructor(private artService: ArtService, private route: ActivatedRoute,
              private router: Router) {
    this.route.params.forEach((params: Params) => {
      this.artId = Number.parseInt(params['id']);
    });
  }

  ngOnInit() {
    this.artService.getArtContentById(this.artId).subscribe(
      res => {
        console.log(res);
        this.artContent = res;
        $( document ).ready(function() {
          $('img').addClass('img-fluid');
        });
      }
    );
  }

}
