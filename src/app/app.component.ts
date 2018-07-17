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
    console.log(
      `Changing language from ${this.translate.currentLang} to ${lang}`
    );
    this.translate.use(lang);
  }
}
