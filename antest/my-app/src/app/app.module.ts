import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { IndexComponent } from './pages/index/index.component';
import { AllSqlComponent } from './pages/all-sql/all-sql.component';

import { ComponentsModule } from './components/components.module';

const appRouts:Routes =[
  {path:"user", component : UserComponent},
  {path:"about", component : AboutComponent},
  {path:"index", component : IndexComponent},
  {path:"all_sql", component : AllSqlComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    IndexComponent,
    AllSqlComponent,
    ComponentsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(appRouts),
    DataTablesModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
