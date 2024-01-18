import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
// import { EventEmitter } from 'stream';
import { HomeComponent } from '../../pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() item: any;
  @Input() condition: any;

  // @Output() messageEvent = new EventEmitter<string>();
  @Output() sentodoEvent = new EventEmitter<string>();
  @Output() senTrufalseEvent = new EventEmitter<boolean>();
  @Output() messageEvent: EventEmitter<{ value1: string, value2: boolean }> = new EventEmitter();

  isChecked: boolean = false;
  constructor() {}

  sendMessage(value1: string,value2:any) {
    this.messageEvent.emit({value1,value2});
  }
  sendTruefalse(df:any) {
    this.senTrufalseEvent.emit(df);
    console.log(`condition ${df}`)
  }


  sendTodo(item: any) {
    this.sentodoEvent.emit(item);
  }

  ngOnInit(): void {
    
  }
}
