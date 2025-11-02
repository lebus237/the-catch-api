export class ActiveRecordManager {
  async getActiveRecord(EntityClass: new () => { constructor: any }) {
    const instance = new EntityClass()
    const ar = () =>
      import('#database/active-records/' + instance.constructor.name + '_model').then(
        (m) => m.default
      )

    return ar()
  }
}
