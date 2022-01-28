import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mt-small-x',
  templateUrl: './small-x.component.html',
  styleUrls: ['./small-x.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallXComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
