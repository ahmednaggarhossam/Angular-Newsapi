import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  businessArticles:any[] = [];
  constructor(private _NewsService:NewsService){}
  ngOnInit():void{
    this._NewsService.getNewsEntertainment().subscribe((data) => {
      this.businessArticles = data.articles;
    })
  }
}
