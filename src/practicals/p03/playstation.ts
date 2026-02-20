import { Product } from './product'

export class Playstation extends Product {
  readonly name?: string;
  protected price: number = 0;
  generation?: number;
  constructor(name: string, generation: number, price: number) {
    super(name)
    this.generation = generation;
    this.price = price
  }
  getProfile() {
    return `${this.name} (Gen ${this.generation})`
  }
  getPrice() {
    return this.price;
  }
  setPrice(n : number) {
    this.price = n;
  }
  getDiscountPrice() {
        const discount = this.price * (Product.DISCOUNT_PERCENT / 100);
        return this.price = this.price - discount;
    }

}