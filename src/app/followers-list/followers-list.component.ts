import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
 // styleUrls: ['./followers-list.component.less']
})
export class FollowersListComponent implements OnInit {
  followersList: Follower[];
  filters = {
    page: 0,
    size: 2,
    lastIndex: 2,
    sortOption: SortOptions.FIRST_NAME
  }
  followers: Follower[] = [
    new Follower("Cristi", "Andrei","https://www.followmeaway.com/wp-content/uploads/2018/10/paris-in-winter-header.jpg"),
    new Follower("Andreea", "Maria","https://www.followmeaway.com/wp-content/uploads/2018/10/paris-in-winter-header.jpg"),
    new Follower("Silviu", "Claudiu","https://www.followmeaway.com/wp-content/uploads/2018/10/paris-in-winter-header.jpg"),
    new Follower("Mihnea", "Paul","https://www.followmeaway.com/wp-content/uploads/2018/10/paris-in-winter-header.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
    this.followersList = this.followers.slice(0, this.filters.lastIndex);
  }
  loadMore() {
    this.filters.page++;
    this.followersList = this.followersList.concat(this.followers.slice(this.filters.lastIndex,this.filters.lastIndex+this.filters.size));
    this.filters.lastIndex = this.filters.lastIndex+this.filters.size;
  }
}
export enum SortOptions {
  FIRST_NAME,
  LAST_NAME
}

export class Follower {
  firstName: string;
  lastName: string;
  profilePicture: string;

  constructor(firstName: string, lastName: string, profilePicture: string)
     {
       this.firstName = firstName;
       this.lastName = lastName;
       this.profilePicture = profilePicture;
     }
}
