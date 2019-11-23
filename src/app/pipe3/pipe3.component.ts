import { Component } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';


@Component({

    selector : 'pipe3-ex',
    templateUrl : './pipe3.component.html' 
   
})
export class Pipe3Component{

company:any[]=[
{
    cmpid:12,name:"Abhishek",gender:"male",salary:20000
},
{
    cmpid:50,name:"Sonali",gender:"female",salary:25000
},
{
    cmpid:33,name:"Pratima",gender:"female",salary:30000
},
{
    cmpid:11,name:"Ganesh",gender:"male",salary:50000
},
  
]

}