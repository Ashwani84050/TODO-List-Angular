import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.title.trim() === '') {
      return;
    }

    const newTask = {
      title: this.title,
      completed: false
    };

    this.taskService.addTask(newTask).subscribe(() => {
      this.title = '';  // Clear form after task creation
      this.taskService.taskAdded.emit();  // Emit event to refresh task list
    });
  }
}
