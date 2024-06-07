import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Roteiro from './roteiro.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class StatusAula extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare status_aula: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Roteiro)
  declare roteiro: HasMany <typeof Roteiro>
}