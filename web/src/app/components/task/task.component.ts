import { Component, EventEmitter, Input, Output, HostListener, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { SelectTask, Task, TaskState } from 'src/app/models/task.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  TaskState = TaskState;
  @Input() task!: Task;
  @Input() selected = false;
  @Output() remove = new EventEmitter<string>();
  @Output() update = new EventEmitter<Task>();
  @Output() updateState = new EventEmitter<Task>();
  @Output() select = new EventEmitter<SelectTask>();
  constructor(private languageService: LanguageService) {}
  ngOnInit(): void {
  }

  isDropdownVisible = false;
  dropdownPosition: { left: number; top: number } | null = null;

  selectTask(event: MatCheckboxChange) {
    this.selected = event.checked;
    this.select.emit({ id: this.task.id, selected: this.selected });
  }

  changeState(state: string) {
    this.task.state = state as TaskState;
    this.updateState.emit(this.task);
    this.isDropdownVisible = false;
  }

  get stateDisplayMap(): { [key in TaskState]: string } {
    return {
      [TaskState.DONE]: this.languageService.translate('task.state.DONE'),
      [TaskState.TODO]: this.languageService.translate('task.state.TODO'),
      [TaskState.DOING]: this.languageService.translate('task.state.DOING'),
      [TaskState.CANCELLED]: this.languageService.translate('task.state.CANCELLED'),
    };
  }

  getStateDisplay(state: TaskState): string {
    return this.languageService.translate(`task.state.${state}`);
  }

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

  isDelayed(): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return new Date(this.task.endDate) < currentDate;
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
