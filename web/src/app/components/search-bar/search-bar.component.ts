import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  searchTerm = '';
  @Input() showDeleteIcon = false;
  @Output() search = new EventEmitter<string | undefined>();
  @Output() add = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  submitSearch = () => {
    this.search.emit(this.searchTerm);
  }

  addNewTask = () => {
    this.add.emit();
  }
}
