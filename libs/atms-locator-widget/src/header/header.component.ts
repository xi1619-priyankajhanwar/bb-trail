import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bb-header-ui',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() headingType: string | undefined;
  @Input() heading: string | undefined;
  constructor() { }

  ngOnInit() { }
}