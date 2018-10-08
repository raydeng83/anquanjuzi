import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private router: Router) {
  }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          items: [
            {
              label: 'Art',
              command: (event: Event) => {
                console.log(event);
                this.router.navigate(['/addArt']);
              }
            }
          ]
        }
        ]
      }
    ];
  }
}
