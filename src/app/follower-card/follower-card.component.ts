import { Component, Input, OnInit } from '@angular/core';
import { Follower } from '../followers-list/followers-list.component';

@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.less']
})
export class FollowerCardComponent implements OnInit {

  @Input() follower: Follower;
    
  constructor() { }

  ngOnInit(): void {
  }

}
