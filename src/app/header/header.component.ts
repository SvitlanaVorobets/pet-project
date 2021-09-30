import {Component} from '@angular/core'
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    supportLanguages = ['En', 'Ua'];

  constructor(private translateService: TranslateService){
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('En');
  }

  useLang(lang: string) {
    this.translateService.use(lang);
  }
}