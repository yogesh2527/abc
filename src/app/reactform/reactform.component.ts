import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';


@Component({

    selector : 'App-ReactForm',
    templateUrl : './reactform.component.html'

})

export class ReactComponent{



technologyUsed = new FormControl('ANGULAR 7');

public Setvalue(){

  this.technologyUsed.setValue('yogesh@gmail.com');

// console.log(this.technologyUsed.value);

}
}