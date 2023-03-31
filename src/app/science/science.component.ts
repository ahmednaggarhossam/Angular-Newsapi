import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  businessArticles:any[] = [];
  constructor(private _NewsService:NewsService){}
  ngOnInit():void{
    this._NewsService.getNewsScience().subscribe((data) => {
      this.businessArticles = data.articles;
    })
  }
}
