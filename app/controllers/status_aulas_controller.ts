import StatusAula from '#models/status_aula'
import type { HttpContext } from '@adonisjs/core/http'

export default class StatusAulasController {
    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await StatusAula.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await StatusAula.query()
                            .where('id', params.id)
                            .preload('roteiro')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['id', 'status_aula'])
        return await StatusAula.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto = await StatusAula.findOrFail(params.id)
        const dados = request.only(['id', 'status_aula'])

        produto.merge(dados)
        return await produto.save()
    }

    async destroy({params}: HttpContext){
        const produto = await StatusAula.findOrFail(params.id)
        
        await produto.delete()
        return {msg: 'Registro deletado com sucesso', produto}
    }   
}
