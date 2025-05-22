import { Component } from '@angular/core';
// Import RouterOutlet, RouterLink, RouterLinkActive untuk routing di template
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Import module routing di sini
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplikasi Penyimpanan Barang';
}