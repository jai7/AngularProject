import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<app-nav></app-nav>
    <h4><b>Start of the module page</b></h4>
    <router-outlet></router-outlet>`
})
export class AppComponent{
    name = "rajesh"
    constructor(){
        console.log("Inside app component constructor")
    }
}