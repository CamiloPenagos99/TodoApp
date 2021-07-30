import { Component } from '@angular/core';
import {Task} from './model/task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-TodoList';

  tareaUno:Task = new Task(1,"tarea","tarea de prueba","alta"); 
  tareaDos:Task = new Task(2,"tarea dos","tarea de prueba","alta"); 

  private tasks:Task[]= [this.tareaUno, this.tareaDos];

 public getTasks():Task[] {
   return this.tasks;
 }
 
}
