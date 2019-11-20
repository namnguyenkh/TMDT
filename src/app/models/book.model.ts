export class BookUploadTypeId {
  static UPLOAD_BOOK = 1;
  static UPLOAD_AUTHOR = 2;
  static UPLOAD_GENRES = 3;
  static UPLOAD_PUBLISHER = 4;
}

export interface Book {
  id: number;
  name: string;
  code: string;
  nameGenre: string;
  nameAuthor: string;
  namePublisher: string;
  status: boolean;
}
export interface Genre extends Book {
  id: number;
  nameGenre: string;
}
export interface Author {
  id: number;
  nameAuthor: string;
}
export interface Publisher {
  id: number;
  namePublisher: string;
}

export interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

export interface BookType {
  id: number;
  name: string;
}

