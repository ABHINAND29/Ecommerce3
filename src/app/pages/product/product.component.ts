import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private api:ApiService){}
    product:any=""
    ngOnInit(){
    this.api.Gettodo().subscribe((data:any)=>(this.product=data))
      }
      
    }

    


