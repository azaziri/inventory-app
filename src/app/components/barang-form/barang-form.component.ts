import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarangService } from '../../services/barang.service';
import { Barang } from '../../models/barang.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barang-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barang-form.component.html',
  styleUrls: ['./barang-form.component.css']
})
export class BarangFormComponent implements OnInit {
  barang: Barang = {
    nama: '',
    jumlah: 0,
    lokasi: '',
    deskripsi: ''
  };
  isEditMode: boolean = false;
  formTitle: string = 'Tambah Barang Baru';

  constructor(
    private barangService: BarangService, // <-- Pastikan namanya sesuai dengan impor
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.formTitle = 'Edit Barang';
      this.barangService.getBarangById(id).subscribe((data: Barang | undefined) => { // Tipe 'data' sudah diperbaiki
        if (data) {
          this.barang = data;
        } else {
          console.warn('Barang dengan ID ' + id + ' tidak ditemukan.');
          this.router.navigate(['/barang']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.barangService.updateBarang(this.barang).subscribe((updatedBarang: Barang | null) => { // Tipe 'updatedBarang' sudah diperbaiki
        if (updatedBarang) {
          this.router.navigate(['/barang']);
        } else {
          console.error('Gagal memperbarui: Barang tidak ditemukan atau error lainnya.');
        }
      });
    } else {
      this.barangService.addBarang(this.barang).subscribe(() => {
        this.router.navigate(['/barang']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/barang']);
  }
}