import { Product } from './product'

export class Playstation extends Product {
  readonly name?: string;
  price: number = 0;
  generation?: number;
  constructor(name: string, generation: number, price: number) {
    super(name)
  }
  getProfile() {
    return `${this.name} (gen ${this.generation})`
  }
  getPrice() {
    return this.price;
  }
  setPrice(n : number) {
    this.price = n;
  }
  getDiscountPrice() {
        const discount = this.price * (Product.DISCOUNT_PERCENT / 100);
        this.price = this.price - discount;
    }

}