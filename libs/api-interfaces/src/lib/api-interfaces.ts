export interface IIngredient {
  _id: string
  name: string
  amount: number
  units: string
}

export interface IRecipe {
  _id: string
  name: string
  ingredients: IIngredient[]
  originalRecipeLink: string
}

export interface IMeal {
  _id: string
  recipe: IRecipe
  plannedDate: Date
}
