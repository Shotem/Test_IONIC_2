import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { IonDatetime } from '@ionic/angular';
import { strictEqual } from 'assert';

@Component({
  selector: 'event-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {
  //@Input()
  eventName: string;
  eventDesc: string;
  eventDate: string;
  eventTime: string;

  events: Array<Event> = [];

  validateDate(): boolean{
    return false;
  }
  
  onClick(): void {
    this.events.push(new Event(this.eventName, this.eventDesc, this.eventDate, this.eventTime));
    console.log(this.events.length);
  }

  constructor() { }
  ngOnInit() {}

}

class Event {
  name:string;
  desc:string;
  date:string;
  time:string;
  constructor( name:string, desc:string, date:string, time:string ){
    this.name = name;
    this.desc = desc;
    this.date = date;
    this.time = time;
  }
}
