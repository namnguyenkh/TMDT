import { Component, OnInit } from '@angular/core';
import { BookUploadTypeId , BookType } from '../../../models/book.model';
@Component({
  selector: 'ngx-books-upload',
  templateUrl: './books-upload.component.html',
  styleUrls: ['./books-upload.component.scss']
})
export class BooksUploadComponent implements OnInit {
  bookList: BookType[] = [
    {
      id: BookUploadTypeId.UPLOAD_BOOK,
      name: 'Thêm Pizza'
    },
    {
      id: BookUploadTypeId.UPLOAD_AUTHOR,
      name: 'Thêm Người Nấu'
    },
    {
      id: BookUploadTypeId.UPLOAD_GENRES,
      name: 'Thêm Thể Loại Món'
    },
    {
      id: BookUploadTypeId.UPLOAD_PUBLISHER,
      name: 'Thêm Người Giao'
    }
  ];
  selectedItem = this.bookList[0];
  fullWidth: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
