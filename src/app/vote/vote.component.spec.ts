import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });


  it('vote increate when called upvote method', () => {

    component.upVote();
    expect(component.totalOVte).toBe(1);
  });

  it('vote decriment when called downvote method', () => {

    component.downVote();
    expect(component.totalOVte).toBe(-1);
  })

});


