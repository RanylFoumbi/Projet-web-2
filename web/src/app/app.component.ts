import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'Todo web';
  searchTerm = '';
  constructor(private readonly dialog: MatDialog) { }

  createTask = () => {
    const dialog = this.dialog.open(EditTaskComponent, {
      width: '500px',
    });
    dialog.afterClosed().subscribe((result) => {
      if (typeof result == 'object') {
        console.log(result);
      }
    });
  }

  handleSearch(term: string | undefined) {
    this.searchTerm = term || '';
    console.log('Search Term:', this.searchTerm);
  }
}

