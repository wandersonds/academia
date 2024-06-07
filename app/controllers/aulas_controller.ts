import type { HttpContext } from '@adonisjs/core/http'

import Aula from "#models/aula"

export default class AulasController {
    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Aula.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Aula.query()
                            .where('id', params.id)
                            .preload('roteiro')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['id', 'modelo', 'horas_aula'])
        return await Aula.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto = await Aula.findOrFail(params.id)
        const dados = request.only(['id', 'modelo', 'horas_aula'])

        produto.merge(dados)
        return await produto.save()
    }

    async destroy({params}: HttpContext){
        const produto = await Aula.findOrFail(params.id)
        
        await produto.delete()
        return {msg: 'Registro deletado com sucesso', produto}
    }
}