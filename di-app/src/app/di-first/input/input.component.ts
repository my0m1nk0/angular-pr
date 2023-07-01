import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageRepository } from 'src/app/resources/message.resources';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  

  constructor(private route:Router, private repo:MessageRepository){}
  addMessage(message:any){
    this.repo.add(message.value)
    message.value=''
    this.route.navigate(['/list'])
  }

}
