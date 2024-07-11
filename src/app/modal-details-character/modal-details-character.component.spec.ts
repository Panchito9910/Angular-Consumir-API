import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsCharacterComponent } from './modal-details-character.component';

describe('ModalDetailsCharacterComponent', () => {
  let component: ModalDetailsCharacterComponent;
  let fixture: ComponentFixture<ModalDetailsCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetailsCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDetailsCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
