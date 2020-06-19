import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsAddPage } from './news-add.page';

describe('NewsAddPage', () => {
  let component: NewsAddPage;
  let fixture: ComponentFixture<NewsAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
