import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  template:` 
  <h1>{{title}}</h1>
  <p>{{book.title | titlecase}}</p>
  <p>{{book.author | titlecase}}</p>
  <p>{{book.price | currency: 'GBP'}}
  <p>{{book.releaseDate | date: 'shortDate'}}
  <p>{{book.rating | percent: '1.1-2'}} of users liked this book</p>
  `,


  styleUrl: './books.component.css'
})



export class BooksComponent {
  title:any = "All our Books";
  isActive:Boolean = true;
  book:any = {
    title: "the thursday murder club",
    author: "richard osman",
    price: 12.99,
    releaseDate: "2022, 05, 08",
    rating: 0.9289
  }
}
