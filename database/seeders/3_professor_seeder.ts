import Professor from '#models/professor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Professor.createMany([
      {nome: 'marcos', matricula: 456131221 , email: 'marcos@teste.com'},
      {nome: 'maria', matricula: 456131410 , email: 'maaria@teste.com'},
      {nome: 'paulo', matricula: 456131218 , email: 'paulo@teste.com'},
      {nome: 'felipe', matricula: 456131240 , email: 'felipe@teste.com'},
    ])

  }
}