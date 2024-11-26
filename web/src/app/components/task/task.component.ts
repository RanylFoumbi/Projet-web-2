import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { Task, TaskStatus } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<string>();
  @Output() update = new EventEmitter<string>();
  
  isDropdownVisible = false; 
  dropdownPosition: { left: number; top: number } | null = null;
  statuses: string[] = Object.values(TaskStatus);

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

  changeStatus(status: string) {
    this.task.status = status as TaskStatus;
    this.isDropdownVisible = false;
  }

  getStatusClasses(): string {
    switch (this.task.status) {
      case TaskStatus.Completed:
        return 'border-green-300 bg-green-100 text-green-600';
      case TaskStatus.Doing:
        return 'border-yellow-300 bg-yellow-100 text-yellow-600';
      case TaskStatus.Todo:
        return 'border-blue-300 bg-blue-100 text-blue-600';
      case TaskStatus.Cancelled:
        return 'border-red-300 bg-red-100 text-red-600';
    }
  }
  @HostListener('document:click', ['$event'])
  closeDropdownOnOutsideClick(event: MouseEvent) {
    const dropdown = document.getElementById('status-dropdown-' + this.task.id);
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
    this.update.emit(this.task.id);
  }
}
