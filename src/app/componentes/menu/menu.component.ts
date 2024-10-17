import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TabMenuModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})




export class MenuComponent implements OnInit {

  constructor(private router: Router) {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Produtos', icon: 'pi pi-box', routerLink: '/produtos' },
      { label: 'Fornecedores', icon: 'pi pi-list', routerLink: '/fornecedores' },
      { label: 'Pedidos', icon: 'pi pi-barcode', routerLink: '/pedidos' },
      { label: 'Transações', icon: 'pi pi-wallet', routerLink: '/transacoes' },
    ];
  }
}
