export class Task {
   private _id:number;
   private _title:string;
   private _description:string;
   private _priority:string;
   private _status : boolean;

   
   constructor(id:number,title:string,description:string,priority:string,status:boolean){
        this._id=id;
        this._title=title;
        this._description=description;
        this._priority=priority;
        this._status=status;
   }

   //Getters and Setters

   public get id():number{
       return this._id
   }

   public set id(id:number){
    this._id = id
  }

   public get title():string{
    return this._title
   }

   public set title(title:string){
     this._title = title
   }

   public get description():string{
    return this._description;
    }

    public set description(description:string){
        this._description = description
      }

    public get priority():string{
        return this._priority;
    }

    public set priority(priority:string){
        this._priority = priority;
    }
    
    public get status() : boolean {
        return this._status;
    }
    public set status(v : boolean) {
        this._status = v;
    }

   
}
