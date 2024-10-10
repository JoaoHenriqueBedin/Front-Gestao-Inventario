import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Produtos', icon: 'pi pi-box' },
            { label: 'Fornecedores', icon: 'pi pi-list' },
            { label: 'Pedidos', icon: 'pi pi-barcode' },
            { label: 'Transações', icon: 'pi pi-wallet' },
        ]
    }

}
