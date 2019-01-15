import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { NavBarComponent, AboutComponent, ContactComponent, HomeComponent, CategoriesComponent } from './navbar.component';
import {RouterModule} from '@angular/router'

@NgModule({
    imports: [BrowserModule, RouterModule],
    exports: [NavBarComponent,AboutComponent,ContactComponent,HomeComponent, CategoriesComponent],
    declarations: [NavBarComponent,AboutComponent,ContactComponent,HomeComponent, CategoriesComponent]
})

export class NavBarModule{
    constructor(){
        console.log("In Nav bar module constructor")
    }
}