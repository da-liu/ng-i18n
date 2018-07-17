import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param = { value: 'world' };
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    let browserLanguage = translate.getBrowserLang();
    translate.use(browserLanguage.match(/en|fr/) ? browserLanguage : 'en');
  }

  changeLanguage(lang) {
    this.translate.use(lang);
    // console.log('changing language to ' + lang);
    // console.log(this.translate.currentLang);
  }
}
