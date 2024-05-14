import { Component } from '@angular/core';
import { NavigationCancel, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { FooterComponent } from './unit/footer/footer.component';
import { CardComponent } from './unit/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,CardComponent,ContactComponent,HomeComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}
