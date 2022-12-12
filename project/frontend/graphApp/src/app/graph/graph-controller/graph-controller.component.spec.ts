import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphControllerComponent } from './graph-controller.component';

describe('GraphControllerComponent', () => {
  let component: GraphControllerComponent;
  let fixture: ComponentFixture<GraphControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
