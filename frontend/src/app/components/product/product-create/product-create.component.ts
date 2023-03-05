import { Product } from './../product.model';
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {

product:Product={
  title: '',
  price: undefined,
  description: '',
  image: '',
  category: ''
}

categories:any[]

  constructor(private productservice: ProductService, private router:Router) {
    this.categories = [
            {category: 'electronic', code: '1'},
            {category: 'house', code: '2'},
            {category: 'school', code: '3'},
        ];
  }

  createProduct(){
    this.productservice.create(this.product).subscribe((e)=>{
      console.log(e)
      this.productservice.show({severity:'success', summary: 'Sucesso', detail: 'Operação realizada com sucesso'});
      setTimeout(()=>this.router.navigate(['/products']), 3000)
    })
  }
}
