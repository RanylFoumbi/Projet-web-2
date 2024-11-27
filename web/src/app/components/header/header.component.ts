import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isDropdownVisible = false;
  currentFlag = 'assets/language-flags/france.png'; 
  constructor(private languageService: LanguageService) {}

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
    }
  }
}
