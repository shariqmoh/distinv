import { Injectable } from '@angular/core';
import { AddItemRequest } from '../models/add-item-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  addItem(model: AddItemRequest): Observable<void> {
    return this.http.post<void>('/api/inventory', model)
  }

}
