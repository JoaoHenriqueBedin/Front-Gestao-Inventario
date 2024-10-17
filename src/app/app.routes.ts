import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { FornecedoresComponent } from './componentes/fornecedores/fornecedores.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';
import path from 'path';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'transacoes', component: TransacoesComponent },
];
