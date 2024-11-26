import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Todo web';

  searchTerm = '';

  constructor(private router: Router) {}

  onSearch(term: string | undefined) {
    this.searchTerm = term || '';
    this.router.navigate(['/home'], { queryParams: { search: this.searchTerm } });
  }
}
