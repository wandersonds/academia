import type { HttpContext } from '@adonisjs/core/http'

import Roteiro from "#models/roteiro"

export default class RoteirosController {
    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Roteiro.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Roteiro.query()
                            .where('id', params.id)
                            .preload('alunos')
                            .preload('aula')
                            .preload('professor')
                            .preload('statusaula')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['alunoId', 'professorId', 'aulaId', 'data_rota', 'statusAulaId'])
        return await Roteiro.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto = await Roteiro.findOrFail(params.id)
        const dados = request.only(['alunoId', 'professorId', 'aulaId', 'data_rota', 'statusAulaId'])

        produto.merge(dados)
        return await produto.save()
    }

    async destroy({params}: HttpContext){
        const produto = await Roteiro.findOrFail(params.id)
        
        await produto.delete()
        return {msg: 'Registro deletado com sucesso', produto}
    }   
}