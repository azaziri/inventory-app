import { Component, OnInit } from '@angular/core';
import { BarangService } from '../../services/barang.service';
import { Barang } from '../../models/barang.model'; // <-- Ini seharusnya benar jika struktur di atas diikuti
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-barang-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})
export class BarangListComponent implements OnInit {
  barangs: Barang[] = [];

  constructor(private barangService: BarangService) { }

  ngOnInit(): void {
    this.loadBarang();
  }

  loadBarang(): void {
    this.barangService.getBarang().subscribe((data: Barang[]) => {
      this.barangs = data;
    });
  }

  deleteBarang(id: string | undefined): void {
    if (id && confirm('Apakah Anda yakin ingin menghapus barang ini?')) {
      this.barangService.deleteBarang(id).subscribe(() => {
        this.loadBarang();
      });
    }
  }
}