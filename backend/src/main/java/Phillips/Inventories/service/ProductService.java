package Phillips.Inventories.service;

import Phillips.Inventories.model.Product;
import Phillips.Inventories.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService implements ProductServiceInterface {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> listProducts() {
        return this.productRepository.findAll();
    }

    @Override
    public Product findProductById(Integer productID) {
        Product product = this.productRepository.findById(productID).orElse(null);
        return product;
    }

    @Override
    public void addProduct(Product product) {
        this.productRepository.save(product);
    }

    @Override
    public void deleteProduct(Integer productID) {
        this.productRepository.deleteById(productID);
    }
}
