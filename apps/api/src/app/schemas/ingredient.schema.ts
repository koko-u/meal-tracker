import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type IngredientDocument = Ingredient & Document

@Schema()
export class Ingredient {
  @Prop()
  name: string

  @Prop()
  amount: number

  @Prop()
  units: string
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient)
