import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHttpDebugComponent } from './simple-http-debug.component';
import { WidgetBaseModule } from '../shared/widget-base/widget-base.module';

describe('SimpleHttpDebugComponent', () => {
  let component: SimpleHttpDebugComponent;
  let fixture: ComponentFixture<SimpleHttpDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHttpDebugComponent ],
      imports: [ WidgetBaseModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHttpDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
