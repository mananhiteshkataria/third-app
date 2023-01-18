import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfdemoComponent } from './tdfdemo.component';

describe('TdfdemoComponent', () => {
  let component: TdfdemoComponent;
  let fixture: ComponentFixture<TdfdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
