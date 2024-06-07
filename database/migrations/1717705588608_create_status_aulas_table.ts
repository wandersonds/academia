import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'status_aulas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable
      table.string('status_aula',200)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}