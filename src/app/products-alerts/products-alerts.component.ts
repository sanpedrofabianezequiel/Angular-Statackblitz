import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent implements OnInit {
  @Input() item!: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
