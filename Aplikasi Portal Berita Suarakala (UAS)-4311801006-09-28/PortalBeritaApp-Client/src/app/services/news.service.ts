import { Injectable } from '@angular/core';

import{HttpClient}from'@angular/common/http';
import{Observable}from'rxjs';
import{mainUrl}from'./config';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  getAllBerita(): Observable<Object> 
  {
    return this.http.get(mainUrl+'/api/berita');
  }
  getNews(id):Observable<Object> {
    return this.http.get(mainUrl + '/api/berita/' + id);
  }
  createNews(news): Observable<Object> {
    return this.http.post(
      mainUrl+'/api/berita/',
      news);
  }
  updateNews(id, news):Observable<Object>  {
    return this.http.put(
      mainUrl+'/api/berita/' + id,
  news)
  }
  deleteNews(id): Observable<Object> {
    return this.http.delete(
    mainUrl + '/api/berita/' + id)
  }
  deleteBerita(): Observable<Object> {
    return this.http.delete(
    mainUrl + '/api/berita/')
  }
}
