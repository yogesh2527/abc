import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'square'
})

export class SquarePipe implements PipeTransform{
    transform(v, n){
        if (n) {
            return (v*v)+n
        }
        else{
            return (v*v)
        }
    }
}
