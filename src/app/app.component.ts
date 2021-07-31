import { Component, OnInit } from '@angular/core';
import {Task} from './model/task'
import {Service} from '../app/services/api.service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent implements OnInit {

  title = 'Angular-TodoList';
  numberFacts=1;  

  currenTask:Task = new Task(0,"","","",false);
  aux:Task = new Task(0,"","","",false);

  tasks:Task[]= [];

  public editing:boolean = false;

  constructor(private _Service: Service){

  }
  ngOnInit():void {
    this.loaded();
  }

  //Metodo para leer el arreglo del localstorage
  public loaded(){
    
    if(localStorage.getItem("_task")!=null){
      const arrayLocalStorage = JSON.parse(localStorage.getItem("_task")|| "{}");

      //Cargar los items de tareas en el arreglo de la app,
      //revisar problema de parseo
      for (let i = 0; i < arrayLocalStorage.length ; i++) {
        const obj=arrayLocalStorage[i];
        this.aux = new Task(obj._id,obj._title,obj._description,obj._priority,obj._status);
        this.tasks.push(this.aux);
    }
  }
}

 public getTasks():Task[] {
   return this.tasks.reverse();
 }

 //Metodo para persistir el arreglo con localstorage
 public persistence(array:Task[]){
  localStorage.setItem("_task",JSON.stringify(array));
 }

  //Agregar tarea
  addTask(){
    this.currenTask.id=this.tasks.length+1;
    this.tasks.push(this.currenTask);
    this.persistence(this.tasks)
    this.currenTask = new Task(0,"","","",false);
  }

  //Marcar tarea como realizada
  doTask(taskn:Task){
    taskn.status=true;
     //enviar la tarea al ultimo lugar
    this.tasks = this.tasks.filter(task => task != taskn);
    this.tasks.unshift(taskn);
    this.currenTask=new Task(0,"","","",false);
    this.persistence(this.tasks)
    
  }

  //eliminar tarea
  deleteTask(tasku:Task){

   if(confirm("¿Quieres eliminar la tarea?")){
    this.tasks = this.tasks.filter(task => task != tasku);
    this.currenTask=new Task(0,"","","",false);
    this.persistence(this.tasks)
   }else this.currenTask=new Task(0,"","","",false);
  
  }

  //habilitar Editar tarea
  editTask(task:Task){
    this.editing=true;
    this.currenTask=task;
  }

  //guardar cambios tarea
  updateTask(){
    this.currenTask = new Task(0,"","","",false);
    this.editing=false;
    this.persistence(this.tasks)
  }

  //Metodos de la lista que es consumida de la api

  listGetFactsApi(){
    this._Service.getGatFacts(this.numberFacts+"").subscribe(
      respose=>{
          this.cleanListTask();
          console.log(respose.data);
          this.loadFactsArray(respose.data);
      },

      error=>{
          console.log("error");
      }
    )
  }

  //Limpiar Tareas

  cleanListTask(){
    localStorage.clear();
    this.tasks=[];
  }

  loadFactsArray(array:Array<any>){
    for (let i = 0; i < array.length ; i++) {
      const obj=array[i];
      this.aux = new Task(i,"fact-"+i,obj.fact,"media",false);
      this.tasks.push(this.aux);
      this.persistence(this.tasks)
  }
  }
 
}
