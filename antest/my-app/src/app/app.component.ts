import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  mdataFeed: any[] = [];
  mdataFeedsql: any[] = [];
  mdataFeedoci: any[] = [];
  dtOptions: DataTables.Settings = {};

  // @ViewChild('Search') Search;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.getFeedback();
    this.getApisql();
    // this.getApioci();
    // alert("test oninit");

  }
  // onchangchil(){
  //   let sheach = this.Search;
  //   window.alert(JSON.stringify(sheach));
  // }

  onsubmit(data) {
    // alert(JSON.stringify(data));
    // alert(data.username);
    // let postdata = {username : data.email, feedback:data.feedback, name:'boy'};
    this.http.post<any>('http://localhost:3000/api', data).subscribe(result => {
      // alert(JSON.stringify(result));
      this.getFeedback();
    });

  }

  getFeedback() {
    this.http.get<any>('http://localhost:3000/api').subscribe(result => {
      this.mdataFeed = result.data;
      // alert(JSON.stringify(result.data));

    });
  }
  delApifb(del) {

  }

  onsubmmitsql(fromsql) {

    this.http.post<any>('http://localhost:3000/sql', fromsql).subscribe(result => {
      // alert(JSON.stringify(result));
      if (result.result == "success") {
        this.getApisql();
        // fromsql.tack.value = "";
        alert(result.result);

      } else {
        alert(result.result);
      }

    });
    // alert(JSON.stringify(fromsql));
  }

  getApisql() {
    this.http.get<any>("http://localhost:3000/sql").subscribe(result => {
      // alert(result);
      this.mdataFeedsql = result.data;
      // alert(JSON.stringify(result));

    });
  }

  delApisql(data) {
    let postdata = { id: data };
    // alert(JSON.stringify(postdata));
    this.http.post<any>("http://localhost:3000/sqldel", postdata).subscribe(result => {
      // alert(result);
      this.getApisql();
      alert(JSON.stringify(result));

    });
  }


  getApioci(data) {
    // alert(name.name);
    let url = "http://localhost:3000/oci?name="+data.Search;
    this.http.get<any>(url).subscribe(result => {
      // alert(result);
      this.mdataFeedoci = result.data;
      // alert(JSON.stringify(result));

    });
  }

  // test(event){
  //   event.prevent
  // }


}
