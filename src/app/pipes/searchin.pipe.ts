import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchin'
})
export class SearchinPipe implements PipeTransform {

  transform(value:any, arg:any): any {
    const array:any = [];
    if(arg=='' || arg.length<1) return value;

    for (const task of value) {
        const desc = task.description.toLowerCase()
      if(desc.indexOf(arg.toLowerCase()) > -1){
         // console.log("coincidencia");
         array.push(task)
      }
    }
    return array;
  }

}
