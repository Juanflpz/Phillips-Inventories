package Phillips.Inventories.service;

import Phillips.Inventories.model.Product;

import java.util.List;

public interface ProductServiceInterface {

    public List<Product> listProducts();

    public Product findProductById(Integer productID);

    //if product has an id then it updates, otherwise it creates it
    public void addProduct(Product product);

    public void deleteProduct(Integer productID);
}
