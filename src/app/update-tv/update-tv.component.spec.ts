import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTvComponent } from './update-tv.component';

describe('UpdateTvComponent', () => {
  let component: UpdateTvComponent;
  let fixture: ComponentFixture<UpdateTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
