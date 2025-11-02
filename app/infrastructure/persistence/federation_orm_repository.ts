import { FederationRepository } from '#domain/federation/repositories/federation_repository'
import { Federation } from '#domain/federation/entities/federation'
import { ActiveRecordManager } from '#shared/infrastructure/repository/active_records_manager'

export class FederationOrmRepository extends ActiveRecordManager implements FederationRepository {
  async save(entity: Federation): Promise<void> {
    const activeRecord = await this.getActiveRecord(Federation)

    if (entity.getId()) {
      await activeRecord.updateOrCreate({ id: entity.getId() }, entity)
    } else {
      await activeRecord.create(entity)
    }
  }

  async findBy(identifier: any): Promise<any> {
    const activeRecord = await this.getActiveRecord(Federation)

    const federation = await activeRecord.findByOrFail({ id: identifier })

    return federation.getId()
      ? Promise.resolve(federation)
      : Promise.reject(new Error('Invalid identifier'))
  }
}
