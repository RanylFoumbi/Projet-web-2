import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { Task, TaskState } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  TaskState = TaskState;
  @Input() task!: Task;
  @Output() remove = new EventEmitter<string>();
  @Output() update = new EventEmitter<Task>();
  @Output() updateState = new EventEmitter<Task>();

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

  changeState(state: string) {
    this.task.state = state as TaskState;
    this.updateState.emit(this.task);
    this.isDropdownVisible = false;
  }

  getStatusClasses(): string {
    switch (this.task.state) {
      case TaskState.DONE:
        return 'border-green-300 bg-green-100 text-green-600';
      case TaskState.DOING:
        return 'border-yellow-300 bg-yellow-100 text-yellow-600';
      case TaskState.TODO:
        return 'border-blue-300 bg-blue-100 text-blue-600';
      case TaskState.CANCELLED:
        return 'border-red-300 bg-red-100 text-red-600';
      default:
        return '';
    }
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
