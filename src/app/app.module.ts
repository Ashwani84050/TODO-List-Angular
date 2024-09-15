import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule to use ngModel
import { HttpClientModule } from '@angular/common/http';  // To make HTTP requests
import {provideClientHydration} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';  // Import TaskFormComponent
import { TaskListComponent } from './task-list/task-list.component';  // Import TaskListComponent

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,  // Add TaskFormComponent to declarations
    TaskListComponent   // Add TaskListComponent to declarations
    
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Make sure FormsModule is imported for ngModel usage in the form
    HttpClientModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas:[ NO_ERRORS_SCHEMA]
})
export class AppModule { }
