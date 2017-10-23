import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  @ViewChild('f') redditForm:ElementRef;

  redittDataArray:Reditt[] = [];


  constructor(private _el:ElementRef) { }

  ngOnInit() {
  }

  onSubmit(valid:boolean,form){
    
    if(valid){

      let cardData:Reditt = {
        id:'asdf54sdf',
        title:form.title,
        link:form.link,
        upvotes:0,
        downvotes:0
      }

      this.redittDataArray.push(cardData)
      console.log(this.redittDataArray);
    }
  }

  upVote(card){
    console.log(card);
    let indexOfCardInCards:number = this.redittDataArray.indexOf(card);
    if(indexOfCardInCards > -1){

      console.log(this.redittDataArray[indexOfCardInCards].upvotes)
      this.redittDataArray[indexOfCardInCards]["upvotes"] += 1;//this.redittDataArray[indexOfCardInCards]["upvote"] + 1;
    }
  };//

  downVote(card){
    console.log(card);
    let indexOfCardInCards:number = this.redittDataArray.indexOf(card);
    if(indexOfCardInCards > -1){

      console.log(this.redittDataArray[indexOfCardInCards].upvotes)
      this.redittDataArray[indexOfCardInCards]["upvotes"] -= 1;//this.redittDataArray[indexOfCardInCards]["upvote"] + 1;
    }
  };//

}

interface Reditt{
  id:string
  title:string;
  link:string;
  upvotes:number;
  downvotes:number
}
