import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import crypto from 'node:crypto'

export default class Federation extends BaseModel {
  @column({ isPrimary: true })
  declare private id: any

  @column()
  declare private name: string

  @column()
  declare private description: string

  @column({ columnName: 'website_url' })
  declare private website: string

  @column()
  declare private headOffice: string

  @column({ columnName: 'logo_url' })
  declare private logo: string

  @column()
  declare private slug: string

  // @ts-ignore
  @column.dateTime({ autoCreate: true })
  declare private createdAt: DateTime

  // @ts-ignore
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare private updatedAt: DateTime | null

  @beforeCreate()
  static async generate(federation: Federation) {
    federation.id = crypto.randomUUID()
  }

  getId() {
    return this.id
  }
}
