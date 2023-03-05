import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private messageService: MessageService,private httpClient: HttpClient) {}

  
  show(info:any) {
      this.messageService.add(info);
  }

  create(product:Product): Observable<Product>{
    return this.httpClient.post<Product>('https://fakestoreapi.com/products',product)
  }
}
