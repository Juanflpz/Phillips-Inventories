/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
*/

/*
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  ngAfterViewInit() {
    const exportButton = document.querySelector('.export-btn') as HTMLButtonElement;

    const exportHTMLTableToCSV = (selector: string) => {
      const table = document.querySelector(selector) as HTMLTableElement;
      if (!table) {
        return;
      }

      const rows = Array.from(table.rows);
      const teamMembers = rows.map(row =>
        Array.from(row.cells).map(cell =>
          (cell as HTMLTableCellElement).innerText.replace(/\n/g, '|')
        )
      );

      const csvContent = 'data:text/csv;charset=utf-8,' +
        teamMembers.map(teamMember => teamMember.join(',')).join('\n');

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'team-members.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove the link after downloading
    };

    exportButton?.addEventListener('click', () => {
      exportHTMLTableToCSV('.table-widget > table');
    });
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    //instance the products array
    this.getAllProducts();

    // Verificar que estamos en el navegador
    if (typeof document !== 'undefined') {
      const exportButton = document.querySelector('.export-btn');

      const exportHTMLTableToCSV = (selector: string) => {
        // parse table for data
        const table = document.querySelector(selector) as HTMLTableElement;
        const rows = Array.from(table.rows);
        const teamMembers = rows.map((row) =>
          Array.from(row.cells).map(
            // if cell have multiple values use pipe symbol
            (cell) => cell.innerText.replace(/\n/g, "|")
          )
        );

        // construct CSV
        const csvContent =
          "data:text/csv;charset=utf-8," +
          teamMembers
            .map((teamMember) => Object.values(teamMember).join(","))
            .join("\n");

        // name file and download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "team-members.csv");
        document.body.appendChild(link);
        link.click();
      };

      exportButton?.addEventListener("click", function () {
        exportHTMLTableToCSV(".table-widget > table");
      });
    }
  }

  private getAllProducts() {
    //consume data of oberservable (to suscribe)
    this.productService.getAllProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  /*
  (products => {
    this.products = products;
  })
  */
}

