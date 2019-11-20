import { Injectable } from '@angular/core';

import vi from '../../assets/i18n/vi-VN.json';
import en from '../../assets/i18n/en-US.json';

import { Subscription } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

const languageKey = 'language';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  constructor(private readonly translateService: TranslateService) {
    translateService.setTranslation('vi-VN', vi);
    translateService.setTranslation('en-US', en);
  }
  /**
   * Warning: this subscription will always be alive for the app's lifetime
   * @param defaultLanguage
   * @param supportedLanguages
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param language The IETF language code to set.
   */
  set language(language: string) {
    language = language || localStorage.getItem(languageKey);
    let isSupportedLanguage = this.supportedLanguages.includes(language);

    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = !!language;
    }

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }
    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }

  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
