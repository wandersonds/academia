import Aula from '#models/aula'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Aula.createMany([

      {modelo: 'cardio', horas_aula: '2' },
      {modelo: 'musculacao', horas_aula: '3' },
      {modelo: 'danca', horas_aula: '2' },
      {modelo: 'musculacao', horas_aula: '2' },

    ])
  }
}