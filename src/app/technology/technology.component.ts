import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  businessArticles:any[] = [];
  constructor(private _NewsService:NewsService){}
  ngOnInit():void{
    this._NewsService.getNewsTechnology().subscribe((data) => {
      this.businessArticles = data.articles;
    })
  }
}
