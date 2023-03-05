import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  items: MenuItem[] = [];

    ngOnInit() {
      this.items = [
          {label: 'Início', icon: 'pi pi-home', routerLink:"/" },
          {label: 'Produtos', icon: 'pi pi-shopping-cart', routerLink:"products"},
      ];
  }
}
