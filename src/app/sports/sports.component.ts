import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  businessArticles:any[] = [];
  constructor(private _NewsService:NewsService){}
  ngOnInit():void{
    this._NewsService.getNewsSports().subscribe((data) => {
      this.businessArticles = data.articles;
    })
  }
}
