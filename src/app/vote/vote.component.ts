import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }

  totalOVte = 0;

  upVote () {
    this.totalOVte++;
  }

  downVote ()
  {
    this.totalOVte--;
  }


  ngOnInit() {
  }

}
