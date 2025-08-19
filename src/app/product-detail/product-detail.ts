import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../service/card-service';
import { HttpClient } from '@angular/common/http'; // Replace axios with HttpClient
declare const axios: any;
declare const $: any;

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, CurrencyPipe], // Added CurrencyPipe here
  templateUrl: './product-detail.html', // Make sure this matches your file name EXACTLY
  styleUrls: ['./product-detail.css']   // And this one too
})
export class ProductDetail {
  product: any = {};

  constructor(private route: ActivatedRoute, public cardService: CardService) { }

  ngOnInit(): void {
    const product_id: string | null = this.route.snapshot.queryParamMap.get('product_id');

    let ng_this = this;
    $.LoadingOverlay("show");
    // Make a request for a user with a given ID
    axios.get(`https://fakestoreapi.com/products/${product_id}`)
      .then(function (response: any) {
        // handle success
        ng_this.product = response.data;
        $.LoadingOverlay("hide");
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  card_item: any[] = [];
  addtocard(product: any) {
    this.cardService.addtocard(product);
    console.log(this.card_item)
  }
}
