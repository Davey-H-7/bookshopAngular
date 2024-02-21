import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [{
      title: "the thursday murder club",
      author: "richard osman",
      price: 12.99,
      releaseDate: "2022, 05, 08",
      rating: 0.9289
    },
    {
      title: "the trial",
      author: "rob rinder",
      price: 9.45,
      releaseDate: "2024, 02, 21",
      rating: 0.785
    }
  
  ]
  }
}
