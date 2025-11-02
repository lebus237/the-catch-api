export class ActiveRecordManager {
  async getActiveRecord(EntityClass: any) {
    const instance = new EntityClass()
    const ar = () =>
      import('#database/active-records/' + instance.constructor.name + '_model').then(
        (m) => m.default
      )

    return ar()
  }
}
