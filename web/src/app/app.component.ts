import { Component } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  {

  constructor(
    private readonly taskService: TaskServiceService
  ) { }

}