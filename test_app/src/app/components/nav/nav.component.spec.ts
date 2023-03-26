import { NavComponent } from './nav.component'
import { ComponentFixture, TestBed, tick } from '@angular/core/testing'
import { LinkComponent } from '../UI/link/link.component'
import { AppRoutingModule } from 'src/app/app-routing.module'

describe('NavComponent', () => {
  let component: NavComponent
  let fixture: ComponentFixture<NavComponent>

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [NavComponent,LinkComponent],
      imports: [AppRoutingModule]
    })
      .compileComponents()

    fixture = TestBed.createComponent(NavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  });

  it('should be created', () => {
    expect(component).toBeTruthy()
  });

  it('should contain scroll and paginator links ', () => {
    const compiled = fixture.nativeElement as HTMLElement
    const scrollLink = compiled.querySelector('[routerlink="/scroll"]')
    const paginatorLink = compiled.querySelector('[routerlink="/paginator"]')
    expect( scrollLink && paginatorLink ).toBeTruthy()
  })

})
