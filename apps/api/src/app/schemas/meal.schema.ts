import { Document, Schema as MongoSchema } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Recipe } from './recipe.schema'

export type MealDocument = Meal & Document

@Schema()
export class Meal {
  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Recipe' })
  recipe: Recipe

  @Prop()
  plannedDate: Date
}

export const MealSchema = SchemaFactory.createForClass(Meal)
