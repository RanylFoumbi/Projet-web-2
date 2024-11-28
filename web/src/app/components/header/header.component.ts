import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Auth, getAuth, signOut, User } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isDropdownVisible = false;
  currentFlag = 'assets/language-flags/france.png'; 
  auth: Auth;
  user: User | null = null;
  
  constructor(private languageService: LanguageService, public authService: AuthService) {
    this.auth = getAuth();
  }

  ngOnInit(): void {
    const currentLanguage = this.languageService.getLanguage() as string;
    this.updateFlag(currentLanguage);

    // Listen to user state changes
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  toggleLanguageDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  changeLanguage(language: string) {
    console.log('Changing language to:', language);
    this.languageService.setLanguage(language);
    this.updateFlag(language);
    this.isDropdownVisible = false; 
  }

  private updateFlag(language: string) {
    const flags: { [key: string]: string } = {
      fr: 'assets/language-flags/france.png',
      en: 'assets/language-flags/etats-unis.png',
      es: 'assets/language-flags/espagne.png',
      pt: 'assets/language-flags/portugal.png',
      de: 'assets/language-flags/allemagne.png',
      ru: 'assets/language-flags/russie.png',
      ja: 'assets/language-flags/japon.png',
      kr: 'assets/language-flags/coree-du-sud.png',
    };
    this.currentFlag = flags[language] || 'assets/language-flags/france.png';
  }

  
}
