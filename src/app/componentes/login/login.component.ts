import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
            ButtonModule,
            PasswordModule,
            InputTextModule,
            FloatLabelModule,
            ReactiveFormsModule,
            CardModule,
            ImageModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username!: string;
  password!: string;
  form: any;


  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
  }


  register() {
    this.router.navigate(['/register']);
    }


  login() {
    alert('Tentaiva de login');
    }

}
