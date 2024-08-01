import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDTO } from "../../../shared/utils";
import { CreateProductDto } from "../dto";
import { ProductRepository } from "../repository";

export class CreateProductUsecase {
  async execute(data: CreateProductDto): Promise<ResultDTO> {
    const productRepository = new ProductRepository();

    const newProduct = await productRepository.createProduct(data);

    return Result.success(
      200,
      "Produto criado com sucesso.",
      newProduct.toJSON()
    );
  }
}
