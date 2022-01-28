import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mt-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
