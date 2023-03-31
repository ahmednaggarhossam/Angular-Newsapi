import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  generalArticles:any[] = [];
constructor(private _NewsService:NewsService){

}
ngOnInit():void{
  
  this._NewsService.getNewsGeneral().subscribe((data) => {
    console.log(data.articles)
    this.generalArticles = data.articles;
  });
}

}
