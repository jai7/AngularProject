import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent{
     constructor(){
         console.log("In nav bar component constructor")
     }
    }


@Component({
    selector: 'app-Home',
    template:  `<h4>Welcome to SoldOut stall..!</h4>`
})
export class HomeComponent{
    constructor(){
        console.log("In Home Component constructor")
    }
}


@Component({
    selector: 'app-About',
    template: `<h3>About template</h3>`
})
export class AboutComponent{
    constructor(){
        console.log("In AboutComponent component constructor")
    }
}

@Component({
    selector: 'app-Contact',
    template: `<h5>Contact template</h5>`
})
export class ContactComponent{
    constructor(){
        console.log("In ContactComponent component constructor")
    }
}


@Component({
    selector: 'app-Categories',
    template: '<h4>Categories template working!!</h4>'
})

export class CategoriesComponent{
    constructor(){
        console.log("In CategoriesComponent constructor")
    }
}