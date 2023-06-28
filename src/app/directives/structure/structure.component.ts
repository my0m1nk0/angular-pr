import { Component } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent {

  student={
    name: 'Aung Aung',
    phone:'09878474884',
    email:'aung@gmail.com',
    class: 'Angular Online Class'
  }

}
