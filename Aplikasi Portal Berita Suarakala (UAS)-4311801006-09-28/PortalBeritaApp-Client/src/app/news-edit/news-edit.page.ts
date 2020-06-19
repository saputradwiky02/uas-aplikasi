import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.page.html',
  styleUrls: ['./news-edit.page.scss'],
})
export class NewsEditPage implements OnInit {
  news: any = {};
  newsId = '';
  constructor(
  private activatedRoute: ActivatedRoute,
  private newsService: NewsService,
  private router: Router,
  private utils: UtilsService
  ) {
  this.getData();
  }
  ngOnInit() { }
  getData() {
  this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
  this.newsService.getNews(this.newsId).subscribe((response) => {
  this.news = response;
  });
  }
  update() {
  this.newsService.updateNews(
  this.newsId, this.news).subscribe((response) => {
  console.log(response);
  this.utils.showToast('Berhasil dirubah');
  this.router.navigate(['/news-detail/' + this.newsId]);
  }, (err) => {
  console.log(JSON.stringify(err));
  this.utils.showToast('Terjadi kesalahan');
  });
  }
}