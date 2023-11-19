import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AuthpageComponent } from './authpage.component'
import { ActivatedRoute } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

describe('AuthpageComponent', () => {
  let component: AuthpageComponent
  let fixture: ComponentFixture<AuthpageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthpageComponent, BrowserAnimationsModule, HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '24fkzrw3487943uf358lovd' } },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AuthpageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
