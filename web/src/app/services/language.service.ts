import { Injectable } from '@angular/core';
import { translations } from 'src/assets/i18n/translations';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: keyof typeof translations = 'fr';

  setLanguage(language: keyof typeof translations): void {
    this.currentLanguage = language;
  }

  getLanguage(): keyof typeof translations {
    return this.currentLanguage;
  }

  translate(key: string): string {
    const keys = key.split('.');
    let translation: any = translations[this.currentLanguage];

    for (const k of keys) {
      if (translation[k]) {
        translation = translation[k];
      } else {
        return key;
      }
    }

    return translation;
  }
}
