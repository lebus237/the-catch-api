/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const FederationController = () => import('#user-interface/controllers/federation_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('/create', [FederationController, 'create'])
        router.get('/:id', [FederationController, 'getById'])
      })
      .prefix('/federation')
  })
  .prefix('/api')
