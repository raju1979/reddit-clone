import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card-data') card:any;

  @Output('change') voteChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.card)
  }

  upVote(card){
    this.voteChange.emit({vote:1,card:this.card});
  };//

  downVote(card){
    this.voteChange.emit({vote:-1,card:this.card});
  };//

}
