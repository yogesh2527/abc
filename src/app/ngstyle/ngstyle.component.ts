import { Component } from "@angular/core";
import { NgStyle } from '@angular/common';

@Component({

    selector : "Ng-Style",
    templateUrl : "./NgStyle.component.html"
})
export class NgstyleComponent{



country:any[]=[
    {
    "Name" : "Spain",
    "Language" : "Spanish"
    },
    {
        "Name" : "India",
        "Language" : "Hindi"
        },
        {
            "Name" : "Uk",
            "Language" : "English"
            },
            {
                "Name" : "Germany",
                "Language" : "German"
                },
                {
                    "Name" : "Usa",
                    "Language" : "English"
                    }

]

getcolor(Name){

    switch(Name)
    {
        case 'India' :  return 'red';
        case 'Usa': return 'green';
        case 'Germany' : return 'orange';
        case 'Spain' : return 'blue';
        case 'Uk' : return 'yellow';

    }
}

}