import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Todo web';

searchTerm = '';

  handleSearch(term: string | undefined) {
    this.searchTerm = term || '';
    console.log('Search Term:', this.searchTerm);
  }
}
