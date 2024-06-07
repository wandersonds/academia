import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roteiros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable
      table.integer('aluno_Id').unsigned().references('id').inTable('alunos').notNullable
      table.integer('professor_Id').unsigned().references('id').inTable('professors').notNullable
      table.integer('aula_Id').unsigned().references('id').inTable('aulas').notNullable
      table.string('data_rota')
      table.integer('status_aula_Id').unsigned().references('id').inTable('status_aulas').notNullable

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}