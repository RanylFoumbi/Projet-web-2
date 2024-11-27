import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { SelectTask, Task, TaskState } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  TaskState = TaskState;
  @Input() task!: Task;
  @Input() selected = false;
  @Output() remove = new EventEmitter<string>();
  @Output() update = new EventEmitter<Task>();
  @Output() updateState = new EventEmitter<Task>();
  @Output() select = new EventEmitter<SelectTask>();

  isDropdownVisible = false;
  dropdownPosition: { left: number; top: number } | null = null;

  toggleStatusDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isDropdownVisible = !this.isDropdownVisible;

    if (this.isDropdownVisible) {
      const statusElement = event.target as HTMLElement;
      const rect = statusElement.getBoundingClientRect();
      this.dropdownPosition = {
        left: rect.right,
        top: rect.top,
      };
    } else {
      this.dropdownPosition = null;
    }
  }

  selectTask(event: MatCheckboxChange) {
    this.selected = event.checked;
    this.select.emit({ id: this.task.id, selected: this.selected });
  }

  changeState(state: string) {
    this.task.state = state as TaskState;
    this.updateState.emit(this.task);
    this.isDropdownVisible = false;
  }

  

  stateDisplayMap: { [key in TaskState]: string } = {
    [TaskState.DONE]: 'Terminée',
    [TaskState.TODO]: 'À faire',
    [TaskState.DOING]: 'En cours',
    [TaskState.CANCELLED]: 'Annulée',
  };

  getStatusClass(): string {
    const baseClasses = 'rounded-md mr-2 border px-2 py-1 cursor-pointer select-none';
    const stateClasses: { [key in TaskState]: string } = {
      [TaskState.DONE]: 'border-green-300 bg-green-100 text-green-600',
      [TaskState.DOING]: 'border-yellow-300 bg-yellow-100 text-yellow-600',
      [TaskState.TODO]: 'border-blue-300 bg-blue-100 text-blue-600',
      [TaskState.CANCELLED]: 'border-red-300 bg-red-100 text-red-600',
    };

    return `${baseClasses} ${stateClasses[this.task.state] || ''}`;
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: MouseEvent) {
    const dropdown = document.getElementById('state-dropdown-' + this.task.id);
    const statusElement = event.target as HTMLElement;
    if (dropdown && !dropdown.contains(statusElement) && !statusElement.classList.contains('cursor-pointer')) {
      this.isDropdownVisible = false;
    }
  }

  removeTask = (event: Event) => {
    event.stopPropagation();
    this.remove.emit(this.task.id);
  }

  updateTask = (event: Event) => {
    event.stopPropagation();
    this.update.emit(this.task);
  }
}
