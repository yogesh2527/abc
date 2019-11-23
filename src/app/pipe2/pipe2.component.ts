import { Component } from "@angular/core";


@Component({

    selector : 'Pipe2-ex',
    templateUrl : './pipe2.component.html'
})
export class pipe2Component{


student:any[]=[

    {
        id : 100 , name:"Yogesh", Subject : "math" ,Marks : 36 
    },
    {
        id : 200 , name:"Omkar", Subject : "math" ,Marks : 90 
    },
    {
        id : 300 , name:"Ganesh", Subject : "math" ,Marks : 94 
    },
    {
        id : 400 , name:"Messi", Subject : "math" ,Marks : 100 
    },
    {
        id : 500 , name:"Ronaldo", Subject : "math" ,Marks : 50 
    },
]

dob = new Date(1996/16/24);

salary=20000;

name:string="Messiiiiiiiii"

crdate = new Date();

mynum:number=0.5416871;

}