import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  searchTerm = '';
  @Output() search = new EventEmitter<string | undefined>();
  @Output() add = new EventEmitter<void>();

  submitSearch = () => {
    if(this.searchTerm.length > 0) {
      this.search.emit(this.searchTerm);
    }
  }

  addNewTask = () => {
    this.add.emit();
  }
}
