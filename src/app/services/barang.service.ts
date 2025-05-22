import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Barang } from '../models/barang.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root' // <-- PASTIKAN INI ADA DAN TIDAK ADA TYPO!
})
export class BarangService {
  private localStorageKey = 'barangList';

  constructor() { }

  getBarang(): Observable<Barang[]> {
    const barangListString = localStorage.getItem(this.localStorageKey);
    const barangList: Barang[] = barangListString ? JSON.parse(barangListString) : [];
    return of(barangList);
  }

  getBarangById(id: string): Observable<Barang | undefined> { // Perhatikan tipe kembalian Barang | undefined
    const barangListString = localStorage.getItem(this.localStorageKey);
    const barangList: Barang[] = barangListString ? JSON.parse(barangListString) : [];
    const barang = barangList.find(b => b.id === id);
    return of(barang);
  }

  addBarang(barang: Barang): Observable<Barang> {
    const barangListString = localStorage.getItem(this.localStorageKey);
    const barangList: Barang[] = barangListString ? JSON.parse(barangListString) : [];
    const newBarang: Barang = { ...barang, id: uuidv4() };
    barangList.push(newBarang);
    localStorage.setItem(this.localStorageKey, JSON.stringify(barangList));
    return of(newBarang);
  }

  updateBarang(barang: Barang): Observable<Barang | null> { // Perhatikan tipe kembalian Barang | null
    const barangListString = localStorage.getItem(this.localStorageKey);
    let barangList: Barang[] = barangListString ? JSON.parse(barangListString) : [];
    const index = barangList.findIndex(b => b.id === barang.id);
    if (index > -1) {
      barangList[index] = barang;
      localStorage.setItem(this.localStorageKey, JSON.stringify(barangList));
      return of(barang);
    }
    return of(null); // Mengembalikan null jika tidak ditemukan
  }

  deleteBarang(id: string): Observable<void> {
    const barangListString = localStorage.getItem(this.localStorageKey);
    let barangList: Barang[] = barangListString ? JSON.parse(barangListString) : [];
    barangList = barangList.filter(b => b.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(barangList));
    return of(undefined);
  }
}