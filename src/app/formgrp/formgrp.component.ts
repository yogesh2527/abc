import { Component } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';


@Component({

    selector : 'App-FormGrp',
    templateUrl : './formgrp.component.html'

})
export class FormpgrpComponent {

    formgrp : FormGroup;

    constructor(){

       this.formgrp = new FormGroup({
            name : new FormControl(''),
            password : new FormControl(''),
            mobileno : new FormControl(''),
            address : new FormControl('')
    
       })
    
    }

   onSubmit(){

    console.warn(this.formgrp.value);

    console.log(this.formgrp.get('name').value);

   }


}