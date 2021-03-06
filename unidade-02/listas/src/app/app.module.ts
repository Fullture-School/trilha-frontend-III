import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Button } from './button/button.component';
import { Header } from './header/header.component';
import { Tasks } from './tasks/tasks.component';
import { List } from './list/list.component';
import { Menu } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    Button,
    Header,
    Tasks,
    List,
    Menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
