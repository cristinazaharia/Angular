import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   ngOnInit() {
    //  window.localStorage.setItem('token', '373838484889');
   const token =  window.localStorage.getItem('token');
  console.log(token);
  window.localStorage.removeItem('token'); 
}
}