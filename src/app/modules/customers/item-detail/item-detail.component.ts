import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
