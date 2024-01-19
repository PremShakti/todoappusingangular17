import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
isLoading=false
showLoader(loading:boolean){
  this.isLoading=loading
}
}
