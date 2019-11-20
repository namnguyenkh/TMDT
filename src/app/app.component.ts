import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslationService } from './services/translation.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'ngx-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private readonly translationService: TranslationService,
    private readonly authenticationService: AuthenticationService
  ) {
    this.authenticationService.loadPrincipal();
  }

  ngOnInit() {
    this.translationService.init(environment.defaultLanguage, environment.supportedLanguages);
  }

  ngOnDestroy() {
    this.translationService.destroy();
  }
}
