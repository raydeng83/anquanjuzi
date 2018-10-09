import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArtService} from '../../services/art.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppConst} from '../../app-const';

@Component({
  selector: 'app-art-ranking',
  templateUrl: './art-ranking.component.html',
  styleUrls: ['./art-ranking.component.css']
})
export class ArtRankingComponent implements OnInit {
  public filter = '';
  public maxSize = 6;
  public directionLinks = true;
  public autoHide = true;
  public responsive = true;
  public config = {
    id: 'advanced',
    itemsPerPage: 16,
    currentPage: 1

  };

  private selectedFolder;
  private fileList;
  p = 1;

  public labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  public articleList = [];
  public artList;

  serverPath = AppConst.serverPath;

  constructor(private artService: ArtService) {
  }

  onPageChange(event) {

  }

  getArtList() {
    this.artService.getArtList().subscribe(
      res => {
        console.log(res);
        this.artList = res;
        console.log(this.artList);
      }
    );
  }

  ngOnInit() {
    this.getArtList();
  }

}
