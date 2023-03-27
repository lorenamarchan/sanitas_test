import { LinkComponent } from './link.component'

import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Component } from '@angular/core'
import { AppRoutingModule } from 'src/app/app-routing.module'

@Component({
  template: '<app-link>testing</app-link>'
  })
  export class LinkContentProjectiontComponent {
  }

describe('LinkComponent', () => {
  let component: LinkComponent
  let componentContentProjection: LinkContentProjectiontComponent
  let fixture: ComponentFixture<LinkComponent>
  let fixtureContentProjection: ComponentFixture<LinkContentProjectiontComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkContentProjectiontComponent,LinkComponent],
      imports: [AppRoutingModule,]
    })
      .compileComponents()

    fixtureContentProjection = TestBed.createComponent(LinkContentProjectiontComponent)
    fixture = TestBed.createComponent(LinkComponent)
    component = fixture.componentInstance
    component.link = '/link'
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it('should have correct link', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('a')?.getAttribute('ng-reflect-router-link')).toBe(component.link)
  })

  it('should have correct label', () => {
    const compiled = fixtureContentProjection.nativeElement as HTMLElement
    expect(compiled.querySelector('a')?.innerText).toBe('testing')
  })


})
