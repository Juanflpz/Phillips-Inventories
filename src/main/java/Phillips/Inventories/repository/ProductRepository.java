package Phillips.Inventories.repository;

import Phillips.Inventories.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
