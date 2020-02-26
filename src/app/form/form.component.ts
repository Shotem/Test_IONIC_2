import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { IonDatetime } from '@ionic/angular';
import { strictEqual } from 'assert';

@Component({
  selector: 'event-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

/*
class Event {
  name: string;
  desc: string;
  dateTime: Date;

  constructor (eventName: string, eventDesc: string, eventDate: string, eventTime: string){
    this.name=eventName;
    this.desc = eventDesc;
  }

}*/

export class FormComponent implements OnInit {
  //@Input()
  eventName: string;
  eventDesc: string;
  eventDate: string;
  eventTime: string;
  
  validateDate(): boolean{
    return false;
  }
  
  onClick(): string {
    let str:string = "Name: " + this.eventName + "\n" +
      (this.eventDesc!=undefined && this.eventDesc != "" ? "Descrpition: " + this.eventDesc:"No description") +
      "\nEvent Date: " + this.eventDate +
      "\n" + (this.eventTime!=undefined ? "Time: " + this.eventTime: "No time");
    
    alert(str);
    console.log(str);
    return str;
  }

  constructor() { }

  ngOnInit() {}

}
