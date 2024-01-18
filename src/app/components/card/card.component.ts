import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() item: any;
  @Input() condition: any;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() sentodoEvent = new EventEmitter<string>();

  constructor() {}

  sendMessage(value: string) {
    this.messageEvent.emit(value);
  }
sendTodo(item:any){
  
  

  this.sentodoEvent.emit(item)
}



  ngOnInit(): void {
    console.log(this.condition);
  }
}
