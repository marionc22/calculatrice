import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  result!: number;
  operator!: string ;
  value1: Array<number | String> = []
  value2:Array<number | String> = []

  constructor() {}

  public getNumber(v: number | string){
    console.log(v);
    if(this.operator==null){
    this.value1.push(v)
        }else{
      this.value2.push(v);

    }
  }

  public getOperator(o: string){
    console.log(o);
this.operator = o
  }

  public doCalculation(){
    switch (this.operator){
      case '+':
      this.result = Number(this.value1.join("")) + Number(this.value2.join("")); 
      break
      case '-': 
      this.result = Number(this.value1.join("")) - Number(this.value2.join("")); 
      break
      case '*': 
      this.result = Number(this.value1.join("")) * Number(this.value2.join("")); 
      break
      case '/': 
      this.result = Number(this.value1.join("")) / Number(this.value2.join("")); 
    }
  }

  public clear(){
this.value1 = []
this.value2 = []
this.operator = ""
  }

  ngOnInit(): void {}
}
