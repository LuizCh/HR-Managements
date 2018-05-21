
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNavComponent } from './content-nav.component';

describe('ContentNavComponent', () => {
  let component: ContentNavComponent;
  let fixture: ComponentFixture<ContentNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
