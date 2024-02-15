import { Component, OnDestroy } from '@angular/core';
import { AddItemRequest } from '../models/add-item-request.model';
import { InventoryService } from '../services/inventory.service';
import { Subscription } from 'rxjs';

@Component({

  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
  
})

export class AddItemComponent implements OnDestroy {

  model: AddItemRequest;
  private addItemSubscription?: Subscription;

  constructor( private inventoryService: InventoryService){
    this.model = {
      name: '',
      description:''
    }
  }

  ngOnDestroy(): void {
    this.addItemSubscription?.unsubscribe();
  }

  onFormSubmit(){

    this.addItemSubscription = this.inventoryService.addItem(this.model).subscribe(
      {
        next: (response)=>{

          console.log('this was succesful')
        },
        error: (error) =>{
          console.log('this failed')
        }
      }
    )
  }
}
