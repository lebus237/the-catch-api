import { Federation } from '../entities/federation.js'

export interface FederationRepository {
  save(entity: Federation): Promise<void>
  findBy(identifier: any): Promise<Federation>
}
