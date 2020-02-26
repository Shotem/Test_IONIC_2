import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { IonDatetime } from '@ionic/angular';

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
  
  onClick(): void {
    console.log("Name: " + this.eventName);
    if (this.eventDesc != undefined && this.eventDesc != ""){
      console.log("Description: " + this.eventDesc);
    } else {
      console.log("No se ingresó descripción");
    }
    console.log("Event Date: " + this.eventDate);
    if (this.eventTime != undefined){
      console.log("Time: " + this.eventTime);
    } else {
      console.log("No se ingresó hora");
    }
  }

  constructor() { }

  ngOnInit() {}

}
