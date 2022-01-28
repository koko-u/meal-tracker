import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mt-recipe-search-results-list',
  templateUrl: './recipe-search-results-list.component.html',
  styleUrls: ['./recipe-search-results-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeSearchResultsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
