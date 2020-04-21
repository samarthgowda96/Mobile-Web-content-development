import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  movies:any;
  name:string;
  imagePath:any;
  year:any;


  constructor() { 
    this.movies=[
      {imagePath:"./assets/terminator.jpg",name:"Terminator Dark Fate",year:"2019", index: 1,genre:"Action",lang:"english"},
      {imagePath:"./assets/inter.jpg",name:"Interstellar",year:"2020", index: 2,genre:"Sci-fi"},
      {imagePath:"./assets/parasite.jpg",name:"Parasite",year:"2020", index: 3,genre:"Comedy"},
      {imagePath:"./assets/avengers.jpg",name:"Avengers Endgame",year:"2019", index: 4,genre:"Sci-fi"},
      {imagePath:"./assets/1917.jpg",name:"1917",year:"2019", index: 5,genre:"Action"},
      {imagePath:"./assets/ad astra.jpg",name:"Ad Astra",year:"2019", index: 6,genre:"Sci-fi"},
      {imagePath:"./assets/joker.jpg",name:"Joker",year:"2019", index: 7,genre:"Drama"},
      {imagePath:"./assets/FVSF.jpg",name:"Ford Vs Ferrari",year:"2020", index: 8,genre:"Action"},
    ];
  }

getmovies() {
  return this.movies;
  }
}
