import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from '../product.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ProductModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortProperty: string = 'name';
  sortOrder = 1;

  ngOnInit(): void {
    this.productService.fetchAllProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    })
  }

  delete(id: Number) {
    const isConfirmed = window.confirm("Are you sure you want to Delete?");
    if (isConfirmed) {
      this.productService.delete(id).subscribe((data) => {
        this.products = this.products.filter(item => item.id != id);
      })
      window.location.reload();
    }
  }

  filterProducts(input: String) {
    this.filteredProducts = this.products.filter(item => item.name.toLowerCase().includes(input.toLowerCase())
      || item.brand.toLowerCase().includes(input.toLowerCase())
      || item.type.toLowerCase().includes(input.toLowerCase()));
  }

  sortBy(value: string) {
    this.sortOrder = value === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = value;
    this.filteredProducts = [...this.products.sort((a: any, b: any) => {
      let result = 0;
      if (a[value] < b[value]) {
        result = -1;
      }
      if (a[value] > b[value]) {
        result = 1;
      }
      return (result * this.sortOrder);
    })]
  }
}
