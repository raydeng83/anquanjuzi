import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArtService} from '../../services/art.service';
import {AppConst} from '../../app-const';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    // let art5 = new Article();
    // art5.date = new Date('10/05/2018');
    // art5.title = '亚太地区的身份和访问管理市场到2024年的复合年增长率达到15％+';
    // art5.path = 'art5';
    // art5.imageUrl = '../../../../../assets/images/articles/2018-10/art5-1.png';
    //
    // this.articleList.push(art5);
    //
    // let art4 = new Article();
    // art4.date = new Date('10/04/2018');
    // art4.title = '身份管理的12个趋势';
    // art4.path = 'art4';
    // art4.imageUrl = '../../../../../assets/images/articles/2018-10/art4-1.png';
    // this.articleList.push(art4);
    //
    // let art3 = new Article();
    // art3.date = new Date('10/03/2018');
    // art3.title = '什么是身份即服务？ IDaaS解释';
    // art3.path = 'art3';
    // art3.imageUrl = '../../../../../assets/images/articles/2018-10/art3-1.png';
    //
    // this.articleList.push(art3);
    //
    // let art2 = new Article();
    // art2.date = new Date('10/02/2018');
    // art2.title = '最好的IAM软件：评选十大产品';
    // art2.path = 'art2';
    // art2.imageUrl = '../../../../../assets/images/articles/2018-10/art2-1.png';
    //
    // this.articleList.push(art2);
    //
    // let art1 = new Article();
    // art1.date = new Date('10/01/2018');
    // art1.title = '什么是身份验证访问管理（IAM）？身份访问管理解释';
    // art1.path = 'art1';
    // art1.imageUrl = '../../../../../assets/images/articles/2018-10/art1-1.png';
    //
    // this.articleList.push(art1);

    this.getArtList();
  }

}
