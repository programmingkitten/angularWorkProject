import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphColorControllerComponent } from './graph-color-controller.component';

describe('GraphColorControllerComponent', () => {
  let component: GraphColorControllerComponent;
  let fixture: ComponentFixture<GraphColorControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphColorControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphColorControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
