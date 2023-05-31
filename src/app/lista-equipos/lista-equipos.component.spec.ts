import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEquiposComponent } from './lista-equipos.component';

describe('ListaEquiposComponent', () => {
  let component: ListaEquiposComponent;
  let fixture: ComponentFixture<ListaEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEquiposComponent]
    });
    fixture = TestBed.createComponent(ListaEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
