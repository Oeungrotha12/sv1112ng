import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../service/product-service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router'; // Changed from RouterModule to RouterLink
import Swal from 'sweetalert2';
import { TruncatePipe } from '../pipe/truncate.pipe';
import { ToKhrPipe } from '../pipe/to-khr-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    CurrencyPipe, 
    TruncatePipe, 
    RouterLink,
    ToKhrPipe
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  products: any[] = [];
  isLoading = true;

  constructor(
    private http: HttpClient,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe({
        next: (response) => {
          this.products = response;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
          this.isLoading = false;
          Swal.fire('Error', 'Failed to load products', 'error');
        }
      });
  }

  addToCart(product: any): void {
    this.productService.addtocard(product);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added to cart!',
      showConfirmButton: false,
      timer: 1500
    });
  }
}