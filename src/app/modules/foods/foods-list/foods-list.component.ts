import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/food.model';
import { BookService } from '../../../services/book.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Pizza } from '../../../models/food.model';
@Component({
  selector: 'ngx-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class FoodsListComponent implements OnInit {
  constructor(private carService: BookService) {}
  cars: Car[];
  pizzas: Pizza[];
  cols: any[];
  cols1: any[];
  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  yearTimeout: any;
  FilterUtils: any[];
  displayDialog: boolean;
  selectedCar: Car;
  newCar: boolean;

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => (this.cars = cars));
    this.carService.getPizza().then(pizzas => (this.pizzas = pizzas));
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.cols1 = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'description', header: 'Description' },
      { field: 'sizes', header: 'Sizes' }
    ];

    this.FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      // tslint:disable-next-line:radix
      return parseInt(filter) > value;
    };
  }
}
