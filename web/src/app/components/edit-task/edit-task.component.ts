import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task, TaskState } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent {

  TaskStatus = TaskState;
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {
    this.form = this.fb.group({
      id: new FormControl(data?.task?.id),
      title: new FormControl(data?.task?.title, [Validators.required]),
      description: new FormControl(data?.task.description, [Validators.required]),
      state: new FormControl(data?.task.state ?? TaskState.TODO, [Validators.required]),
      startDate: new FormControl(new Date(), [Validators.required, this.dateValidator()]),
      endDate: new FormControl(new Date(), [Validators.required, this.dateValidator()]),
    });
  }

  @Output() save = new EventEmitter<Task>();


  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentDate = new Date();
      const selectedDate = new Date(control.value);
      if (selectedDate < currentDate) {
        return { invalidDate: 'Date cannot be in the past' };
      }
      return null
    }
  }
}
