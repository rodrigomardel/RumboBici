import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasCategoryComponent } from './rutas-category.component';

describe('RutasCategoryComponent', () => {
  let component: RutasCategoryComponent;
  let fixture: ComponentFixture<RutasCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutasCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
