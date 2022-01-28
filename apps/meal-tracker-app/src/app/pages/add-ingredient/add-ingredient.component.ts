import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mt-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddIngredientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
