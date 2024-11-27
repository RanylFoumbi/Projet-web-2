import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';  // Import LanguageService

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
  constructor(private languageService: LanguageService) {}

  getTranslation(key: string): string {
    return this.languageService.translate(key);
  }
}
