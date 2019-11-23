import { Component } from "@angular/core";

@Component({

    selector : "Ng-Class",
    templateUrl : "./ngclasss.component.html",
    styleUrls : ['./ngclasss.component.css']
})

export class NgclassComponent{

name:string="dfjsd";
col:number=4;
bdr:number=10;
arr:any[]=[  
        'XYZ',
        'JDFJ',
        'KKDS'
   
];

public add(){
        console.log("Hello World");

}
public show(){

    alert("Bye Bye");
}

}