import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent {
constructor(public service:UserService) 
{}
  users : any=[];
  handleClick(){
    //only on subscribe will data be available
    //subscribe takes object with properties like next and error
    this.service.getFakeJson().subscribe({
      next:(value)=>this.users=value,
      error:(value)=> console.log(value)
    });
  }
  

}
