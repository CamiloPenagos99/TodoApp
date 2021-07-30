export class Task {
   private id:number;
   private title:string;
   private description:string;
   private priority:string;

   constructor(id:number,title:string,description:string,priority:string){
        this.id=id;
        this.title=title;
        this.description=description;
        this.priority=priority;
   }

   //Getters and Setters

   public getId():number{
       return this.id
   }

   public getTitle():string{
    return this.title
   }

   public getDescription():string{
    return this.description;
    }

    public getPriority():string{
        return this.priority;
    }
}
