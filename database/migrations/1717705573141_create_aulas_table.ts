import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'aulas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable
      table.string('modelo', 200)
      table.decimal('horas_aula')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}