import { Component } from "@angular/core";

@Component({

        selector : 'app-mycontainer', 
        templateUrl : './mycontainer.component.html',
        styleUrls : ['./mycontainer.component.css']

})

export class MyContainerComponent{
    [x: string]: any;


msg:String="";
  

  OnAddCart(event){

    this.msg=this.target.value +"product Added In Cart";
  }


}