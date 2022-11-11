import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompContainerComponent } from './comp-container.component';

describe('CompContainerComponent', () => {
  let component: CompContainerComponent;
  let fixture: ComponentFixture<CompContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
