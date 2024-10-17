import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { FornecedoresComponent } from './componentes/fornecedores/fornecedores.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HomeComponent,
    ProdutosComponent,
    FornecedoresComponent,
    PedidosComponent,
    TransacoesComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'gestao-inventario';
  rotaAtual: string;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.url;
        console.log(this.rotaAtual);
      }
    });
  }
}
