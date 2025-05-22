package com.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.product.entity.Product;
import com.product.service.ProductService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(maxAge = 3360, origins = "http://localhost:4200")
@RestController
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping("/api/v1/products")
	public ResponseEntity<List<Product>> fetchAllProducts() {
		return ResponseEntity.ok(productService.getAllProducts());
	}
	
	@GetMapping("/api/v1/products/{id}")
	public ResponseEntity<Product> fetchById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(productService.getById(id));
	}
	
	@PostMapping("/api/v1/products")
	public ResponseEntity<Product> create(@RequestBody Product product) {
		return ResponseEntity.ok(productService.saveProduct(product));
	}
	
	@PutMapping("/api/v1/products/{id}")
	public ResponseEntity<Product> create(@RequestBody Product product,@PathVariable("id") Long id ) {
		return ResponseEntity.ok(productService.updateProduct(product,id));
	}
	
	@DeleteMapping("/api/v1/products/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id){
		return ResponseEntity.ok(productService.deleteProduct(id));
	}
}
