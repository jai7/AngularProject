import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser'
import { NavBarModule } from 'src/nav/navbar.module';
import { LoginModule } from 'src/shared/login/login.module';
import { RouterModule, Route, Routes } from '@angular/router'
import { LoginComponent } from 'src/shared/login/login.component';
import { AboutComponent, ContactComponent, HomeComponent, CategoriesComponent } from 'src/nav/navbar.component';

const appRoutes:Routes  = [{path: 'login', component: LoginComponent},{path: 'about', component: AboutComponent},{path: 'contact', component: ContactComponent}, {path: 'home', component: HomeComponent}, {path: 'categories', component: CategoriesComponent}]
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NavBarModule, LoginModule, RouterModule.forRoot(appRoutes)],
    bootstrap: [AppComponent]
})
export class AppModule{
    constructor(){
        console.log("In App Module constructor")
    }
}