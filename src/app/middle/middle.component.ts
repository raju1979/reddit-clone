import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  @ViewChild('f') redditForm: ElementRef;

  redittDataArray: Reditt[] = [];


  constructor(private _el: ElementRef) { }

  ngOnInit() {
  }

  onSubmit(valid: boolean, form) {

    if (valid) {

      let cardData: Reditt = {
        id: 'asdf54sdf',
        title: form.title,
        link: form.link,
        upvotes: 0,
        downvotes: 0
      }

      this.redittDataArray.push(cardData)
      console.log(this.redittDataArray);
    }
  }

  getVote($event) {
    console.log($event);

    if ($event.vote > 0) {
      let indexOfCardInCards: number = this.redittDataArray.indexOf($event.card);
      if (indexOfCardInCards > -1) {

        console.log(this.redittDataArray[indexOfCardInCards].upvotes)
        this.redittDataArray[indexOfCardInCards]["upvotes"] += 1;//this.redittDataArray[indexOfCardInCards]["upvote"] + 1;
      }
    }else{
      console.log('negative')
      let indexOfCardInCards: number = this.redittDataArray.indexOf($event.card);
      if (indexOfCardInCards > -1) {

        console.log(this.redittDataArray[indexOfCardInCards].upvotes)
        this.redittDataArray[indexOfCardInCards]["upvotes"] -= 1;//this.redittDataArray[indexOfCardInCards]["upvote"] + 1;
      }
    }

  };//



}

interface Reditt {
  id: string
  title: string;
  link: string;
  upvotes: number;
  downvotes: number
}
