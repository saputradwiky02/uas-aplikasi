import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NewsService } from '../services/news.service';
import { mainUrl } from '../services/config';
import { UtilsService } from '../services/utils.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  news: any = {};
  newsId = '';
  constructor(
  private activatedRoute: ActivatedRoute,
  private newsService: NewsService,
  private alertCtrl: AlertController,
  private utils: UtilsService,
  private router: Router
  ) { }
  getData() {
  this.newsId = this.activatedRoute.snapshot.paramMap.get('id');
  this.newsService.getNews(this.newsId).subscribe((response) => {
  this.news = response;
  this.news.gambar = mainUrl + '/img/' + this.news.gambar;
  console.log(this.news)
  })
  }
  goEdit() {
  this.router.navigate(['/news-edit/' + this.newsId])
  }
  ngOnInit() { }
  ionViewWillEnter() {
  this.getData();
  }

  async delete(news) {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Berita!',
      message: 'Apakah anda yakin akan menghapus berita dengan judul <strong>' + news.judul_berita + '</strong>' + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (lol) => {
            console.log('cancel' + lol);
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.newsService.deleteNews(news.id)
            .subscribe((response) => {
              console.log(response);
              this.utils.showToast('Berhasil dihapus')
              this.getData();
              this.router.navigate(['/tabs/']);
          }, (err) => {
                console.log(JSON.stringify(err));
                this.utils.showToast('Terjadi kesalahan');
               });
          }
        }]
    });
    alert.present();
    }

 }
 
