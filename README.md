# Angular Internationalization Example

Minimal example of Angular internationalization with [ngx-translate](https://github.com/ngx-translate/core). 

1. **Import TranslateModule**

   ```js
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { HttpClientModule, HttpClient } from '@angular/common/http';
   import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
   import { TranslateHttpLoader } from '@ngx-translate/http-loader';
   
   import { AppComponent } from './app.component';
   
   export function createTranslateLoader(http: HttpClient) {
     return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
   }
   
   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       HttpClientModule,
       TranslateModule.forRoot({
         loader: {
           provide: TranslateLoader,
           useFactory: createTranslateLoader,
           deps: [HttpClient]
         }
       })
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule {}
   ```

   

2. **Import TranslationService**

   ```js
   import { Component } from '@angular/core';
   import { TranslateService } from '@ngx-translate/core';
   
   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent {
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
   ```

   

3. **Use translate pipe in template**

   ```html
   <ul>
     <button (click)="changeLanguage('en')">English</button>
     <button (click)="changeLanguage('fr')">French</button>
   </ul>
   <div>{{ 'HOME.HELLO' | translate: param }}</div>
   ```

   

4. **Provide translation .json files**

   ```json
   // src/assets/en.json
   {
     "HOME": { "HELLO": "Hello {{ name }}!" }
   }
   
   // src/assets/fr.json
   {
     "HOME": { "HELLO": "Salut {{ name }}!" }
   }
   ```

   