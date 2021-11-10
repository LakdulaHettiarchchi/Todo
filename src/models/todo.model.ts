import { Guid } from "guid-typescript";

export class Todo{

 constructor(
  
    public id :Guid,
    public title:string,
    public iscomplte:boolean

 ){}


}