import { Component } from "@angular/core";
import { templateJitUrl } from '@angular/compiler';

@Component({

    selector : 'NgFor-GroupBy',
    templateUrl :  './ngforgroupby.component.html'
})

export class NgforgroupbyComponent{
constructor(){}
Countrydetails:any[]=[
    {
        'ctrname' :'india',
        'people' :[
            { "name ": "Ram"},
            {"name ": "Shyam"},
            {"name ":"Omkar"}
                 ]
    },
    {
        'ctrname' :'America',
        'people' :[
            { "name ": "Abc"},
            {"name ": "Xyz"},
            {"name ":"Pqr"}
                 ]
    },
    {
        'ctrname' :'United Kingdom',
        'people' :[
            { "name ": "Efg"},
            {"name ": "Mnl"},
            {"name ":"Ghi"}
                 ]
    },
  
]
       
}