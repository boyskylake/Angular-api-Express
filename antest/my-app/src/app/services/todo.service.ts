import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {  } from "@angular/common/";
// import { map } from "rxjs/add/operator/map";
// import { Observable } from 'rxjs';
// import { Todo } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { 

  }

  getTodolist(){
    return this.http.get<any>("https://api-ng-test.azurewebsites.net/all")
    // .toPromise()
    // .catch();
    
  }
}


// export interface Todo {
//   userId: string;
//   Id_face: string;
//   name: string;
//   time: number;
// }
 