import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  product: Product = {
    id: 0,
    name: '',
    type: '',
    brand: ''
  }
  constructor(private productService: ProductService, private router: Router) { }

  create() {
    this.productService.create(this.product).subscribe({
      next: (data) => {
        this.router.navigate(["product/home"]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  cancel() {
    this.router.navigate(["product/home"]);
  }
}
