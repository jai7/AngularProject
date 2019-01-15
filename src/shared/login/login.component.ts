import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent{
    constructor(){
        console.log("In Login component constructor")
    }    
}