import { Component } from '@angular/core';

@Component({
  selector: 'app-tdfdemo',
  templateUrl: './tdfdemo.component.html',
  styleUrls: ['./tdfdemo.component.css']
})
export class TdfdemoComponent {
  first: string='';
  last: string='';
  phone : number | string ='';

  handleSubmit(user: any)
  {
    alert('Form is submitted');
    console.log(user);
    //in real time we need to pass this object
    // to the backend
  }

}
