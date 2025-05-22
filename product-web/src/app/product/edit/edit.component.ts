import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  product: Product = {
    id: 0,
    name: '',
    type: '',
    brand: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getById(id);
    })
  }

  getById(id: Number) {
    this.productService.getById(id).subscribe((data) => {
      this.product = data;
    })
  }

  cancel() {
    this.router.navigate(["product/home"]);
  }

  update() {
    this.productService.create(this.product).subscribe({
      next: (data) => {
        this.router.navigate(["product/home"]);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
