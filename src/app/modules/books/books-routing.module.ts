import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksUploadComponent } from './books-upload/books-upload.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'books-list',
        component: BooksListComponent
      },
      {
        path: 'books-upload',
        component: BooksUploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
