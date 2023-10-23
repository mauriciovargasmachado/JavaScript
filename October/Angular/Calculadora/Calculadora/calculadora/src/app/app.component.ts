import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  number_1 =0;
  number_2 =0;
  result = 0;

  sumar():void { 
    this.result = this.number_1+this.number_2
  }
  restar():void { 
    this.result = this.number_1-this.number_2
  }
  multiplicar():void { 
    this.result = this.number_1*this.number_2
  }
  dividir():void { 
    this.result = this.number_1/this.number_2
  }


}
