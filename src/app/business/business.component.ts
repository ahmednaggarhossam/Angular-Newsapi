import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  businessArticles:any[] = [];
  constructor(private _NewsService:NewsService){}
  ngOnInit():void{
    this._NewsService.getNewsBusiness().subscribe((data) => {
      this.businessArticles = data.articles;
    })
  }
}
