import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReestablecercontrasennaComponent } from './reestablecercontrasenna.component';

describe('ReestablecercontrasennaComponent', () => {
  let component: ReestablecercontrasennaComponent;
  let fixture: ComponentFixture<ReestablecercontrasennaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestablecercontrasennaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReestablecercontrasennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
