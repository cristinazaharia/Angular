import { Component, OnInit } from '@angular/core';

export class UserPost {
  title: string;
  description: string;
  userName: string;
  id: number;

constructor(id: number, username: string, title: string, description: string) {
  this.id = id;
  this.userName = username;
  this.title = title;
  this.description = description;
}
}
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
 styleUrls: ['./feed.component.less']
})

export class FeedComponent implements OnInit {

  userPosts: UserPost[] = [
  new UserPost(1, 'Catalin', 'vacanta', 'a fost frumoasa'),
  new UserPost(2, 'Maria', 'iarna', ' este un anotimp rece '),
  new UserPost(3, 'Ana', 'excursia', 'a fost placuta'),
  new UserPost(4, 'Emilian', 'scoala','e necesara'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
