import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api';
  taskAdded = new EventEmitter<void>();  // Emit event to refresh the task list

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl.replace('/tasks', '/task'), task);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl.replace('/tasks', '/task')}/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl.replace('/tasks', '/task')}/${id}`);
  }
}
