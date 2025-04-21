import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalloginComponent } from './terminallogin.component';

describe('TerminalloginComponent', () => {
  let component: TerminalloginComponent;
  let fixture: ComponentFixture<TerminalloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
