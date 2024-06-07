import Aluno from '#models/aluno'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Aluno.createMany([
      {matricula: 1234564, nome: "Joao", telefone: 61999999999},
      {matricula: 123789, nome: "Marcio", telefone: 61999999998},
      {matricula: 789456, nome: "Maria", telefone: 61999999945},
      {matricula: 741456, nome: "carlos", telefone: 61999999978},
      {matricula: 142350, nome: "Joana", telefone: 61999994510},
      {matricula: 523451, nome: "Paulo",  telefone: 61999997841}
    ])
  }
}