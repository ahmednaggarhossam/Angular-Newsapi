import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private _HttpClient:HttpClient) { }
  getNewsGeneral():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=63721beec3da4914a3d7191155476ddb`);
  }
  getNewsBusiness():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=63721beec3da4914a3d7191155476ddb`);
  }
  getNewsEntertainment():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=63721beec3da4914a3d7191155476ddb`);
  }
  getNewsHealth():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=63721beec3da4914a3d7191155476ddb`);
  }
  getNewsScience():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=63721beec3da4914a3d7191155476ddb`);
  }
  getNewsSports():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=63721beec3da4914a3d7191155476ddb`);
  }
  getNewsTechnology():Observable<any>{
    return this._HttpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=63721beec3da4914a3d7191155476ddb`);
  }
}
