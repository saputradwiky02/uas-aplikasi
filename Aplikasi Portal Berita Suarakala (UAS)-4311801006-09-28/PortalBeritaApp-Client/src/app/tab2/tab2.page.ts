import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  news: any = {}
  constructor(
  private newsService: NewsService,
  private utils: UtilsService
  ) { }

  submit() {
    this.newsService.createNews(this.news).subscribe((response) => {
    console.log(response);
    this.utils.showToast('Berhasil ditambahkan');
    }, (err) => {
    console.log(JSON.stringify(err));
    this.utils.showToast('Terjadi kesalahan');
    });
    }
   }