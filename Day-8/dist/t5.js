"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ProductDetail(Product) {
    console.log(`${Product.id}: ${Product.name} costs $${Product.price}`);
}
ProductDetail({ id: 201, name: "shoes", price: 20000, inStock: true });
ProductDetail({ id: 202, name: "Cycle", price: 10000, inStock: false });
//# sourceMappingURL=t5.js.map