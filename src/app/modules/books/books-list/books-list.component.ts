import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {



  constructor(private readonly router: Router) {

  }
  ngOnInit() {}
  navigateCreateItem() {
    this.router.navigate(['admin/book/books-upload']);
  }
}
