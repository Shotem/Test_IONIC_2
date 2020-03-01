import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';
import { IonDatetime } from '@ionic/angular';
import { strictEqual } from 'assert';

@Component({
  selector: 'event-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit {
  @Input()
  eventName: string;
  @Input()
  eventDesc: string;

  eventDate: string;
  eventTime: string;

  events: Array<Event> = [];
  
  minDate(): string {
    let date = new Date();
    let day:   number = date.getDate();
    let month: number = date.getMonth()+1;
    let year:  number = date.getFullYear();

    let str:string = "";
    str += year.toString()+"-";
    str += (month < 10 ? "0" : "") + month.toString()+"-";
    str += ( day  < 10 ? "0" : "") + day.toString();
    return str;
  }

  validateDate(): boolean{
    return false;
  }
  
  onClick(): void {
    this.events.push(new Event(this.eventName, this.eventDesc, this.eventDate, this.eventTime));
    alert("Evento insertado correctamente");
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
