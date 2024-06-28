package Phillips.Inventories.controller;

import Phillips.Inventories.model.Product;
import Phillips.Inventories.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//localhost:8080/inventory-app
@RequestMapping("inventory-app")
//set default port of Angular service
@CrossOrigin(value = "http://localhost:4200")
public class ProductController {

    private static final Logger logger =
            LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductService productService;

    //localhost:8080/inventory-app/products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        List<Product> products = this.productService.listProducts();
        logger.info("Obtained all products: ");
        products.forEach(System.out::println);
        //products.forEach((p -> logger.info(p.toString())));
        return products;
    }
}
