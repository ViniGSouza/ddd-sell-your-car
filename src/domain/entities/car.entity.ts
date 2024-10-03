export class Car {
  constructor(
    public readonly id: string,
    public category: string,
    public brand: string,
    public model: string,
    public year: number,
    public mileage: number,
    public description: string,
    public ownerId: string,
    public price: number,
  ) {}
}
