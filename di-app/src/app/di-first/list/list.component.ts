import { Component } from '@angular/core';
import { Message, MessageRepository } from 'src/app/resources/message.resources';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list:Message[]
  constructor(repo:MessageRepository){
   
    this.list= repo.getAll()
  }

}
