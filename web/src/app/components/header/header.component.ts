import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isDropdownVisible = false;
  currentFlag = 'assets/language-flags/france.png'; 
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    const currentLanguage = this.languageService.getLanguage() as string;
    this.updateFlag(currentLanguage);
  }

  toggleLanguageDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  changeLanguage(language: string) {
    console.log('Changement de langue vers :', language);
    this.languageService.setLanguage(language);
    this.updateFlag(language);
    this.isDropdownVisible = false; 
  }

  private updateFlag(language: string) {
    if (language === 'fr') {
      this.currentFlag = 'assets/language-flags/france.png';
    } else if (language === 'en') {
      this.currentFlag = 'assets/language-flags/etats-unis.png';
    } else if (language === 'es') {
      this.currentFlag = 'assets/language-flags/espagne.png';
    } else if (language === 'pt') {
      this.currentFlag = 'assets/language-flags/portugal.png';
    } else if (language === 'de') {
      this.currentFlag = 'assets/language-flags/allemagne.png';
    } else if (language === 'ru') {
      this.currentFlag = 'assets/language-flags/russie.png';
    } else if (language === 'ja') {
      this.currentFlag = 'assets/language-flags/japon.png';
    } else if (language === 'kr') {
      this.currentFlag = 'assets/language-flags/coree-du-sud.png';
    }
  } 
}
