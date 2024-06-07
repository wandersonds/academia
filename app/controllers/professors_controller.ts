import Professor from '#models/professor'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfessorsController {
        async index({request}: HttpContext){
            const page = request.input('page', 1)
            const perPage = request.input('perPage', 10)
    
            return await Professor.query().paginate(page, perPage)
        }
    
        async show({params}: HttpContext){
            return await Professor.query()
                                .where('id', params.id)
                                .preload('roteiro')
                                .first()
        }
    
        async store({request}: HttpContext){
            const dados = request.only(['id', 'nome', 'matricula', 'email'])
            return await Professor.create(dados)
        }
    
        async update({params, request}: HttpContext){
    
            const produto = await Professor.findOrFail(params.id)
            const dados = request.only(['id', 'nome', 'matricula', 'email'])
    
            produto.merge(dados)
            return await produto.save()
        }
    
        async destroy({params}: HttpContext){
            const produto = await Professor.findOrFail(params.id)
            
            await produto.delete()
            return {msg: 'Registro deletado com sucesso', produto}
        }
}