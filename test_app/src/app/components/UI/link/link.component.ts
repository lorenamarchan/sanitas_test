import { Component, Input, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @ViewChild(RouterLinkActive, { static: false }) public rla!: RouterLinkActive;
  @Input() link!: string

}
