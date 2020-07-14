import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PageHeaderComponent implements OnInit {

  @Input() title;
  @Input() breadcrumb = [];
  @Input() additionalText;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
