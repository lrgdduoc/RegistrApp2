import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaparabdPage } from './paginaparabd.page';

describe('PaginaparabdPage', () => {
  let component: PaginaparabdPage;
  let fixture: ComponentFixture<PaginaparabdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaparabdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
