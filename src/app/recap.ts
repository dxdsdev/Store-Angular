import { last } from "rxjs";

const username:string='Xen';

const sum=(a:number,b:number)=>{
    return a+b;
}

sum(1,2);

class Person{
    age:number;
    lastName:string;

    constructor(age:number,lastname:string){
        this.age=age;
        this.lastName=lastname;
    }
}

class Person1{
   
    constructor(public age:number,public lastname:string){ }
}

const xen=new Person(29,'Romero');