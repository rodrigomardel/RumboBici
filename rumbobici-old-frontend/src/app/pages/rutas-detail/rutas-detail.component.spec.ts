import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasDetailComponent } from './rutas-detail.component';

describe('RutasDetailComponent', () => {
  let component: RutasDetailComponent;
  let fixture: ComponentFixture<RutasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutasDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
