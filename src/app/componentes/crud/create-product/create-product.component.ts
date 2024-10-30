import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule,
    FloatLabelModule,
    CardModule,
    ButtonModule,
    MessagesModule,
    RippleModule,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})


export class CreateProductComponent {

  messages: Message[] | undefined;

  addMessages() {
    this.messages = [
        { severity: 'success', summary: 'Produto Criado com Sucesso' },

    ];
}


  onUpload($event: FileUploadEvent) {
    throw new Error('Method not implemented.');
  }
  value: any;
}
