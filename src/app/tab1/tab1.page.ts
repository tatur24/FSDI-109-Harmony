import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Message } from '../models/message';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  displayMessage: Message[];

  constructor(private data: DataService) {
   //this.homework();
    data.getAllMessages().subscribe(list => {
      
      this.displayMessage = list.sort((left, right) => {
          // return -1 when left should go first
          // return 1 when right should go first
          // return 0 if they are the same
          if(!left.createdOn) return -1; // if left don't have a date, it goes first

          if(left.createdOn > right.createdOn){
            return 1;
          }
          else if(right.createdOn > left.createdOn){
            return -1;
          }

          return 0;

      })
    });
  }


  }



// 1 - Sort items by Age Desc
    // 2 - Sort items by Age Asc
    // 3 - Print only actives
    // 4 - Sum all the balances