import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Professor from './professor.js'
import Aula from './aula.js'
import StatusAula from './status_aula.js'

export default class Roteiro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare alunoId:number

  @column()
  declare professorId:number

  @column()
  declare aulaId:number

  @column()
  declare data_rota:string

  @column()
  declare statusAulaId:number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=> Aluno)
  declare alunos: BelongsTo <typeof Aluno>

  @belongsTo(()=> Professor)
  declare professor: BelongsTo <typeof Professor>

  @belongsTo(()=> Aula)
  declare aula: BelongsTo <typeof Aula>

  @belongsTo(()=> StatusAula)
  declare statusaula: BelongsTo <typeof StatusAula>
}