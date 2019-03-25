import { Component, OnInit } from '@angular/core';
import { TodoService } from "../services/todo.service";
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;
  private adress:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }

  private skills:string[];
  private todolist:any;

  constructor(private todoservice:TodoService) {

   }

  ngOnInit() {
    this.name = "auttapong nitee";
    this.age = 19;
    this.email = "sskylake@sskalk.com";

    this.adress = {
      street:"554/555 thai land",
      city:"bankkok",
      province:"thailand",
      postcode:"44444"
    }

    this.skills = ["programs","C#","php","node"];

    this.todoservice.getTodolist().subscribe(data =>{
      this.todolist = data;
      console.log(data);
      
    })
  }

  addskill(skill){
    this.skills.unshift(skill);
    return false;
  }

  onClickdel(skill){
    this.skills.forEach((element, index)=>{
      if (element == skill) {
        this.skills.splice(index,1);
      }
    });
  }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
 
