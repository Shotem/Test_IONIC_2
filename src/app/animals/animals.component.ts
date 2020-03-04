import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})

export class AnimalsComponent implements OnInit {

  animals: any = [
    {
      name:"Gato",
      image:'/assets/images/cat.jpg',
      sound:"/assets/audio/cat.mp3"
    },
    {
      name:"Perro",
      image:'/assets/images/dog.jpg',
      sound:"/assets/audio/dog.mp3"
    },
    {
      name:"Elefante",
      image:"/assets/images/elephant.jpg",
      sound:"/assets/audio/elephant.mp3"
    },
    {
      name:"Vaca",
      image:"/assets/images/cow.jpg",
      sound:"/assets/audio/cow.mp3"
    },
  ];

  sonidoAnimal(animal:any) {
    let sound = new Audio();
    sound.src = animal.sound;
    sound.load();
    sound.play();
  }
  
  constructor() { }

  ngOnInit() {}

}
