package com.product.service;

import java.util.List;

import com.product.entity.Product;

public interface ProductService {

	List<Product> getAllProducts();
	Product getById(Long id);
	Product saveProduct(Product product);
	Product updateProduct(Product product, Long id);
	String deleteProduct(Long id);
	
}
