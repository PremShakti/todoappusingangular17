import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }
  getProducts(){
    return this._httpClient.get(`${environment.apiUrl}/items`)
  }

  postProducts(fz:any){
    return this._httpClient.post(`${environment.apiUrl}/items`,fz)
  }
  putProducts(fzz:any,id:any){
    return this._httpClient.put(`${environment.apiUrl}/items/${id}`,fzz)
  }

  deleteItems(itemIds: string[]): Observable<any> {
  
    return this._httpClient.post(`${environment.apiUrl}/deleteitems`, {itemIds});
  }


}
