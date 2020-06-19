import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ModalController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.page.html',
  styleUrls: ['./news-add.page.scss'],
})
export class NewsAddPage implements OnInit {
  news: any = {}
  constructor(
  private newsService: NewsService,
  private modalCtrl: ModalController,
  private utils: UtilsService
  ) { }
  ngOnInit() { }
  submit() {
    this.newsService.createNews(this.news).subscribe((response) => {
    console.log(response);
    this.utils.showToast('Berhasil ditambahkan');
    this.modalCtrl.dismiss();
    }, (err) => {
    console.log(JSON.stringify(err));
    this.utils.showToast('Terjadi kesalahan');
    });
    }
    closePage() {
    this.modalCtrl.dismiss();
    }
   }