import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/About';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About = {
    id: 1,
    name: ""
  };

  constructor() {

   }

  ngOnInit() {
    // click(){
    //   console.log('test')
    // }
  }

}
