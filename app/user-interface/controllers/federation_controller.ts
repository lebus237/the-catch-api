import { HttpContext } from '@adonisjs/core/http'
import { FederationRepository } from '#domain/federation/repositories/federation_repository'
import { FederationOrmRepository } from '#infrastructure/persistence/federation_orm_repository'
import { Federation } from '#domain/federation/entities/federation'

export default class FederationController {
  public repository: FederationRepository
  constructor() {
    this.repository = new FederationOrmRepository()
  }
  async create({ response, request }: HttpContext) {
    const { name, description, headOffice, logo, slug, website } = request.body()
    await this.repository.save(
      new Federation(null, name, description, headOffice, logo, slug, null, null, website)
    )

    return response.created()
  }

  async update({ response, request, params }: HttpContext) {
    const { name, description, headOffice, logo, slug, website } = request.body()
    await this.repository.save(
      new Federation(params.id, name, description, headOffice, logo, slug, null, null, website)
    )

    return response.noContent()
  }

  async getById({ response, params }: HttpContext) {
    const federation = await this.repository.findBy(params.id)

    return response.ok({ data: federation })
  }
}
