import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreacionqrPage } from './creacionqr.page';

describe('CreacionqrPage', () => {
  let component: CreacionqrPage;
  let fixture: ComponentFixture<CreacionqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreacionqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
