import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-mdfdemo',
  templateUrl: './mdfdemo.component.html',
  styleUrls: ['./mdfdemo.component.css']
})
export class MdfdemoComponent {
 constructor(public builder:FormBuilder){}

  user=this.builder.group({first:[],last:[],phone:[]});

handleSubmit()
{
  alert("Form is submitted...")
  console.log(this.user.value);
  let firstname=this.user.controls['first'].value;
  console.log('Hey  '+firstname);
  this.user.reset({});
}
}
