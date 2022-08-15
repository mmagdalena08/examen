import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposanimalComponent } from './tiposanimal.component';

describe('TiposanimalComponent', () => {
  let component: TiposanimalComponent;
  let fixture: ComponentFixture<TiposanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposanimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
