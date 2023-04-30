/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CafesListComponent } from './cafes-list.component';
import { CafesService } from '../cafes.service';
import { Cafe } from '../cafe';

describe('CafesListComponent', () => {
  let component: CafesListComponent;
  let fixture: ComponentFixture<CafesListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ CafesListComponent ],
      providers: [ CafesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const cafe = new Cafe(
        i,
        "Café Especial "+i,
        "blend",
        "Fredonia, Antioquia",
        "Chocolate negro, Caramelo",
        1450,
        "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png"
      );
      component.cafe.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se crearon 3 filas de cafes ', () => {
    expect(debug.queryAll(By.css('th.fila'))).toHaveSize(3)
  });

  it('Se crearon 3 filas más el encabezado ', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });
});
