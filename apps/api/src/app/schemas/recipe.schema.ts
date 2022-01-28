import { Document, Schema as MongoSchema } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Ingredient } from './ingredient.schema'

export type RecipeDocument = Recipe & Document

@Schema()
export class Recipe {
  @Prop()
  id: string

  @Prop()
  name: string

  @Prop({
    type: [{ type: MongoSchema.Types.ObjectId, ref: 'Ingredient' }],
  })
  ingredients: Ingredient[]
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe)
