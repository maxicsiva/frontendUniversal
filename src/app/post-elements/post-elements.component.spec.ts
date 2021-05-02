import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostElementsComponent } from './post-elements.component';

describe('PostElementsComponent', () => {
  let component: PostElementsComponent;
  let fixture: ComponentFixture<PostElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
