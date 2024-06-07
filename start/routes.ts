/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AlunosController from '#controllers/alunos_controller'
import AulasController from '#controllers/aulas_controller'
import ProfessorsController from '#controllers/professors_controller'
import RoteirosController from '#controllers/roteiros_controller'
import StatusAulasController from '#controllers/status_aulas_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/alunos', AlunosController).apiOnly()
router.resource('/aulas', AulasController).apiOnly()
router.resource('/professores', ProfessorsController).apiOnly()
router.resource('/roteiros', RoteirosController).apiOnly()
router.resource('/status', StatusAulasController).apiOnly()