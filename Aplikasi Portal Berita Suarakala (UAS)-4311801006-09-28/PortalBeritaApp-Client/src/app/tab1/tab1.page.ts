import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { mainUrl } from '../services/config';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  berita: any = [];
  news: any = {};
  newsId = '';
  constructor(
    private newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utils: UtilsService) { }

  getData() {
    /* this.newsService.getAllBerita().subscribe((response) => {
    console.log(response);
    this.berita = response;

    this.berita.gambar = mainUrl + '/img/' + this.berita.gambar;
    console.log(this.berita); */

    this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
  this.newsService.getAllBerita().subscribe((response) => {
  this.berita = response;

    },
    (err) => {
      this.berita = [];
      console.log(JSON.stringify(err));
      this.utils.showToast('Terjadi kesalahan');
    });
  }
 
  ionViewWillEnter() {
  this.getData();
 }

 doRefresh(event) {
  this.getData();
  setTimeout(() => {
    event.target.complete();
  }, 1000);
 }

 goDetail(news) {
  console.log('id: ' + news.id);
  this.router.navigate(['/news-detail/' + news.id]);
 }
}