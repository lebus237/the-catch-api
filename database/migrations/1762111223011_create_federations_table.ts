import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'federations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().unique().notNullable()

      table.string('name').notNullable()

      table.string('description').notNullable()

      table.string('logo_url').notNullable()

      table.string('head_office').notNullable()

      table.string('slug').notNullable()

      table.string('website_url').nullable()

      table.timestamp('created_at')

      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
