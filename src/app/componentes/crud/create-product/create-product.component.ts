import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule

  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
onUpload($event: FileUploadEvent) {
throw new Error('Method not implemented.');
}
value: any;

}
