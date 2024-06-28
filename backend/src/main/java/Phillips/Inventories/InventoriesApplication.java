package Phillips.Inventories;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class InventoriesApplication {
	public static void main(String[] args) {
		SpringApplication.run(InventoriesApplication.class, args);
	}
}
