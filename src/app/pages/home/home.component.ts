import { Component, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface PeriodicElement {
  product: string;
  category: string;
  stock: boolean;
  sku: string;
  quantity: number;
  image: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    product: 'Laptop',
    category: 'Electronics',
    stock: true,
    sku: 'LT123',
    quantity: 50,
    image: 'https://picsum.photos/40/40?random=1',
  },
  {
    product: 'Smartphone',
    category: 'Electronics',
    stock: true,
    sku: 'SP456',
    quantity: 100,
    image: 'https://picsum.photos/40/40?random=2',
  },
  {
    product: 'Desk Chair',
    category: 'Furniture',
    stock: true,
    sku: 'DC789',
    quantity: 20,
    image: 'https://picsum.photos/40/40?random=3',
  },
  {
    product: 'Running Shoes',
    category: 'Sports',
    stock: true,
    sku: 'RS101',
    quantity: 75,
    image: 'https://picsum.photos/40/40?random=4',
  },
  {
    product: 'Coffee Maker',
    category: 'Appliances',
    stock: false,
    sku: 'CM202',
    quantity: 5,
    image: 'https://picsum.photos/40/40?random=5',
  },
  {
    product: 'Bookshelf',
    category: 'Furniture',
    stock: true,
    sku: 'BS303',
    quantity: 30,
    image: 'https://picsum.photos/40/40?random=6',
  },
  {
    product: 'Headphones',
    category: 'Electronics',
    stock: true,
    sku: 'HP789',
    quantity: 25,
    image: 'https://picsum.photos/40/40?random=7',
  },
  {
    product: 'Tennis Racket',
    category: 'Sports',
    stock: true,
    sku: 'TR405',
    quantity: 15,
    image: 'https://picsum.photos/40/40?random=8',
  },
  {
    product: 'Microwave Oven',
    category: 'Appliances',
    stock: true,
    sku: 'MO506',
    quantity: 10,
    image: 'https://picsum.photos/40/40?random=9',
  },
  {
    product: 'Office Chair',
    category: 'Furniture',
    stock: true,
    sku: 'OC701',
    quantity: 18,
    image: 'https://picsum.photos/40/40?random=10',
  },
  {
    product: 'Bluetooth Speaker',
    category: 'Electronics',
    stock: true,
    sku: 'BS808',
    quantity: 40,
    image: 'https://picsum.photos/40/40?random=11',
  },
  {
    product: 'Running Shorts',
    category: 'Sports',
    stock: true,
    sku: 'RS202',
    quantity: 50,
    image: 'https://picsum.photos/40/40?random=12',
  },
  {
    product: 'Refrigerator',
    category: 'Appliances',
    stock: true,
    sku: 'RF903',
    quantity: 8,
    image: 'https://picsum.photos/40/40?random=13',
  },
  {
    product: 'Sofa',
    category: 'Furniture',
    stock: true,
    sku: 'SF110',
    quantity: 12,
    image: 'https://picsum.photos/40/40?random=14',
  },
  {
    product: 'Digital Camera',
    category: 'Electronics',
    stock: true,
    sku: 'DC405',
    quantity: 22,
    image: 'https://picsum.photos/40/40?random=15',
  },
  {
    product: 'Yoga Mat',
    category: 'Sports',
    stock: true,
    sku: 'YM608',
    quantity: 30,
    image: 'https://picsum.photos/40/40?random=16',
  },
  {
    product: 'Toaster',
    category: 'Appliances',
    stock: true,
    sku: 'TS711',
    quantity: 15,
    image: 'https://picsum.photos/40/40?random=17',
  },
  {
    product: 'Dining Table',
    category: 'Furniture',
    stock: true,
    sku: 'DT214',
    quantity: 9,
    image: 'https://picsum.photos/40/40?random=18',
  },
  {
    product: 'Wireless Mouse',
    category: 'Electronics',
    stock: true,
    sku: 'WM517',
    quantity: 35,
    image: 'https://picsum.photos/40/40?random=19',
  },
  {
    product: 'Soccer Ball',
    category: 'Sports',
    stock: true,
    sku: 'SB820',
    quantity: 60,
    image: 'https://picsum.photos/40/40?random=20',
  },
];

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'eve-home',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    NgForOf,
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {
  displayedColumns: string[] = [
    'check',
    'product',
    'category',
    'stock',
    'sku',
    'quantity',
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
