import { Routes } from '@angular/router';
import { BarangListComponent } from './app/components/barang-list/barang-list.component';
import { BarangFormComponent } from './app/components/barang-form/barang-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/barang', pathMatch: 'full' }, // Redirect root ke /barang
  { path: 'barang', component: BarangListComponent },
  { path: 'barang/add', component: BarangFormComponent },
  { path: 'barang/edit/:id', component: BarangFormComponent },
  { path: '**', redirectTo: '/barang' } // Handle path yang tidak dikenal
];