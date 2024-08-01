import { Base } from "./Base";

export interface ProductJson {
  id: string;
  sku: string;
  name: string;
  stock: number;
  cost: number;
  price: number;
}

interface EditProductDto {
  sku?: string;
  name?: string;
  stock?: number;
  cost?: number;
  price?: number;
}

export class Product extends Base {
  constructor(
    _id: string,
    private _sku: string,
    private _name: string,
    private _stock: number,
    private _cost: number,
    private _price: number
  ) {
    super(_id);
  }

  public toJson(): ProductJson {
    return {
      id: this._id,
      sku: this._sku,
      name: this._name,
      stock: this._stock,
      cost: this._cost,
      price: this._price,
    };
  }

  updateProduct(data: EditProductDto): boolean {
    if (data.sku) {
      if (data.sku?.length < 0) {
        return false;
      }
      this._sku = data.sku;
    }

    if (data.name) {
      if (data.name?.length < 0) {
        return false;
      }
      this._name = data.name;
    }

    if (data.stock) {
      if (data?.stock < 0) {
        return false;
      }
      this._stock = data.stock;
    }

    if (data.cost) {
      if (data?.cost < 0) {
        return false;
      }
      this._cost = data.cost;
    }

    if (data.price) {
      if (data?.price < 0) {
        return false;
      }
      this._price = data.price;
    }

    return true;
  }
}
