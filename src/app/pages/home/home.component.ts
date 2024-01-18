import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ApiCallService } from '../../services/api-call.service';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  getdata: any;
  array: any[] = [];
  uniqueArray: any[] = [];
  receivedMessage: any;
  condition: boolean = false;
  textAreaContant: string = '';
  disableBtn: boolean = true;
  id: any;
  
  submitBtnAndEdiBtnchanger: boolean = false;
  todoPostdata = {
    todo: '',
  };

  constructor(private _api: ApiCallService) {}

  onKey(event: any) {
    // without type info
    this.todoPostdata.todo = event.target.value;
  }
  ngOnInit(): void {
    this._api.getProducts().subscribe({
      next: (data) => {
        this.getdata = data;
      },
      error: (error) => {},
    });
  }
 
  onClickPost() {
    this._api.postProducts(this.todoPostdata).subscribe({
      next: (d) => {
        this._api.getProducts().subscribe({
          next: (data) => {
            this.getdata = data;
          },
          error: (error) => {},
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onClickDelete(): void {
    this.condition = false;
    this.getdata = null;
    this._api.deleteItems(this.array).subscribe({
      next: (d) => {
        this._api.getProducts().subscribe({
          next: (data) => {
            this.getdata = data;
          },
          error: (error) => {},
        });
      },
      error: (error) => {},
    });
  }

  receiveMessage(data:{value1: string,value2:boolean}) {
    

    if (data.value2 == true) {
    
      this.array.push(data.value1);
      this.uniqueArray = [...new Set(this.array)];
    } else {
      this.array = this.array.filter((item) => !item.includes(data.value1));

    }
    if(this.array.length>0){
      this.disableBtn=false
    }else{
      this.disableBtn=true
    }

  }
  resiveTodo(event: any) {
    this.textAreaContant = event.todo;
    this.submitBtnAndEdiBtnchanger = true;
    this.id = event._id;
  }

  handleEdit() {
    this._api.putProducts(this.todoPostdata, this.id).subscribe({
      next: (d) => {
        this._api.getProducts().subscribe({
          next: (data) => {
            this.getdata = data;
            this.submitBtnAndEdiBtnchanger = false;
          },
          error: (error) => {},
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  clickSubmitandEdit() {
    if (this.submitBtnAndEdiBtnchanger) {
      this.handleEdit();
      console.log('edit chala');
    } else {
      this.onClickPost();
      console.log('post chala');
    }
  }
  reset() {
    this.submitBtnAndEdiBtnchanger = false;
    this.textAreaContant = '';
  }
}
