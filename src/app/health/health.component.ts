import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  businessArticles:any[] = [];
  constructor(private _NewsService:NewsService){}
  ngOnInit():void{
    this._NewsService.getNewsHealth().subscribe((data) => {
      this.businessArticles = data.articles;
    })
  }
}
