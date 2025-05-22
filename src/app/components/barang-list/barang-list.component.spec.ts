import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangListComponent } from './barang-list.component';

describe('BarangListComponent', () => {
  let component: BarangListComponent;
  let fixture: ComponentFixture<BarangListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarangListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
