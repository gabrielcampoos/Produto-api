import { Result, ResultDTO } from "../../../shared/utils";
import { EditProductDto } from "../dto";
import { ProductRepository } from "../repository";

export class EditProductUsecase {
  async execute(data: EditProductDto): Promise<ResultDTO> {
    const { id, newData } = data;

    const productRepository = new ProductRepository();

    const product = await productRepository.verifyIfProductExists(id);

    if (!product) return Result.error(400, "Produto não encontrado.");

    const update = product.updateProduct({
      sku: newData.sku,
      name: newData.name,
      stock: newData.stock,
      cost: newData.cost,
      price: newData.price,
    });

    if (!update) return Result.error(400, "Produto não pode ser editado.");

    const productJson = product.toJson();

    productRepository.editProduct({
      id,
      sku: productJson.sku,
      name: productJson.name,
      stock: productJson.stock,
      cost: productJson.cost,
      price: productJson.price,
    });

    return Result.success(200, "Produto editado.", product);
  }
}
