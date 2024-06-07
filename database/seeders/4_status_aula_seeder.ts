import StatusAula from '#models/status_aula'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await StatusAula.createMany([
      {status_aula: 'finalizado'},
      {status_aula: 'agendado'},
      {status_aula: 'execucao'},
      {status_aula: 'finalizado'},
    ])
  }
}