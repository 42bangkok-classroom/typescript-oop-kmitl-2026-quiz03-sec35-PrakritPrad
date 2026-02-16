export class Product {
    readonly name?: string;
    price?: number = 0;
    static readonly DISCOUNT_PERCENT: number = 10;
    constructor(name: string) {
        this.name = name;

    }
    getPrice() {
        return this.price;
    }
    setPrice(price: number) {
        this.price = price;

    }
    getDiscountPrice() {
        const discount = this.price * (percent / 100);
        this.price = this.price - discount;
    }
}

