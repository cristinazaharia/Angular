import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-post-details',
  templateUrl: './user-post-details.component.html',
  styleUrls: ['./user-post-details.component.less']
})
export class UserPostDetailsComponent implements OnInit {

  id: string;

  constructor(private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
   // console.log(this.id);

  }

  

}
