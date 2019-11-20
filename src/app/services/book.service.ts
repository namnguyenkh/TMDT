import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/food.model';
import { Pizza } from '../models/food.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}
  getCarsSmall() {
    return this.http
      .get('../../assets/data/car.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }
  getPizza() {
    return this.http
      .get('../../assets/data/pizza.json')
      .toPromise()
      .then(res => <Pizza[]>res.data)
      .then(data => {
        return data;
      });
  }
}
