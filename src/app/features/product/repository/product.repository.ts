import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { CreateProductDto, UpdateProductDto } from "../dto";
import { Product } from "../../../models";
import { ProductEntity } from "../../../shared/entities";

export class ProductRepository {
  private _manager = DatabaseConnection.connection.manager;

  async verifyIfProductExists(id: string): Promise<Product | undefined> {
    const productExists = await this._manager.findOne(ProductEntity, {
      where: {
        id: id,
      },
    });

    if (!productExists) return undefined;

    return this.entityToModel(productExists);
  }

  async createProduct(data: CreateProductDto): Promise<Product> {
    const createProduct = this._manager.create(ProductEntity, { ...data });

    const productCreated = await this._manager.save(createProduct);

    return this.entityToModel(productCreated);
  }

  async listProducts(): Promise<Product[]> {
    const listOfProducts = await this._manager.find(ProductEntity);

    return listOfProducts.map((product) => this.entityToModel(product));
  }

  async editProduct(data: UpdateProductDto): Promise<void> {
    const { id, sku, name, stock, cost, price } = data;

    await this._manager.update(
      ProductEntity,
      { id: id },
      { sku, name, stock, cost, price }
    );
  }

  async deleteProduct(id: string): Promise<void> {
    const product = await this._manager.delete(ProductEntity, { id: id });

    if (!product) return undefined;
  }

  private entityToModel(dataDb: ProductEntity): Product {
    return new Product(
      dataDb.id,
      dataDb.sku,
      dataDb.name,
      dataDb.stock,
      dataDb.cost,
      dataDb.price
    );
  }
}
