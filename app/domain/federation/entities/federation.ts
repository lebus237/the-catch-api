export class Federation {
  constructor(
    private id: any,
    private name: string,
    private description: string,
    private headOffice: string,
    private logo: string,
    private slug: string,
    private createdAt: any,
    private updatedAt: any,
    private website: string | null
  ) {}

  getId() {
    return this.id
  }
}
