import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./books.component.html',
  styleUrl: './books.component.css'
})



export class BooksComponent {
  title:any = "All our Books";
  isActive:Boolean = true;
  books:any;

  constructor(service: BooksService){
    this.books = service.getBooks();
  }

}
