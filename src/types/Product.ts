export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    currency: string;
    price: number;
    salePrice?: number;
}