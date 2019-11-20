import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  page = 4;
  constructor() { }

  ngOnInit() {
  }

}
