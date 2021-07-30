import { Component } from '@angular/core';
import {Task} from './model/task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-TodoList';

  tareaUno:Task = new Task(1,"tarea","tarea de prueba","alta",false); 
  tareaDos:Task = new Task(2,"tarea dos","tarea de prueba","alta",false);

  currenTask:Task = new Task(0,"","","",false);

  tasks:Task[]= [this.tareaUno, this.tareaDos];

  public editing:boolean = false;

 public getTasks():Task[] {
   return this.tasks;
 }

  //Agregar tarea
  addTask(){
    this.currenTask.id=this.tasks.length+1;
    this.tasks.push(this.currenTask);
    this.currenTask = new Task(0,"","","",false);
  }

  //Marcar tarea como realizada
  doTask(task:Task){
     task.status=true;
  }

  //eliminar tarea
  deleteTask(id:number){
    alert("Eliminada:" + id);
  }

  //habilitar Editar tarea
  editTask(task:Task){
    this.editing=true;
    this.currenTask=task;
  }

  //guardar cambios tarea
  updateTask(){
    this.editing=true;
    this.currenTask = new Task(0,"","","",false);
  }

 
}
