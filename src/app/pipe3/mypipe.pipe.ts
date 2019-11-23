
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({

    name :'mypipe'
})
export class Mypipepipe implements PipeTransform{

    transform(value : string , gender : string )
     {
         if(gender=="male")
         {
             return "Mr. "+value;
         }
         else
         {
            return "Mrs. "+value;
         }

    }
}