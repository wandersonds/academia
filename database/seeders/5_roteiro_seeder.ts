import Roteiro from '#models/roteiro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Roteiro.createMany([

      {alunoId: 6, professorId: 4, aulaId: 4, data_rota: '01/06/2024', statusAulaId: 4}

    ])

  }
}