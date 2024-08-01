export interface EditProductDto {
  id: string;
  newData: {
    sku: string;
    name: string;
    stock: number;
    cost: number;
    price: number;
  };
}

export interface UpdateProductDto {
  id: string;
  sku: string;
  name: string;
  stock: number;
  cost: number;
  price: number;
}
