package com.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.entity.Product;
import com.product.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepository;
	@Override
	public List<Product> getAllProducts() {
		return (List<Product>) productRepository.findAll();
	}

	@Override
	public Product getById(Long id) {
		return productRepository.findById(id).get();
	}

	@Override
	public Product saveProduct(Product product) {
		if (product.getId() != null && product.getId() == 0) {
	        product.setId(null);
	    }
	    return productRepository.save(product);
	}

	@Override
	public Product updateProduct(Product product, Long id) {
		
		Product prodObj = productRepository.findById(id).get();
		if(prodObj!=null) {
			prodObj.setBrand(product.getBrand());
			prodObj.setName(product.getName());
			prodObj.setType(product.getType());
		}
		return productRepository.save(prodObj);
	}

	@Override
	public String deleteProduct(Long id) {
		Product prodObj = productRepository.findById(id).get();
		String deleteMessage = null;
		if(prodObj!=null) {
			productRepository.delete(prodObj);
			deleteMessage = "Product is removed successfullly for the id : " + id;
		}
		return deleteMessage;
	}

	
}
