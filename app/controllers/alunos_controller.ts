import Aluno from '#models/aluno'
import type { HttpContext } from '@adonisjs/core/http'

export default class AlunosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Aluno.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Aluno.query()
                            .where('id', params.id)
                            .preload('roteiro')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['id', 'matricula', 'nome', 'telefone'])
        return await Aluno.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto = await Aluno.findOrFail(params.id)
        const dados = request.only(['id', 'matricula', 'nome', 'telefone'])

        produto.merge(dados)
        return await produto.save()
    }

    async destroy({params}: HttpContext){
        const produto = await Aluno.findOrFail(params.id)
        
        await produto.delete()
        return {msg: 'Registro deletado com sucesso', produto}
    }
}