import { Result, ResultDTO } from "../../../shared/utils";
import { ProductRepository } from "../repository";

export class DeleteProductUsecase {
  async execute(id: string): Promise<ResultDTO> {
    const productRepository = new ProductRepository();

    const product = await productRepository.verifyIfProductExists(id);

    if (!product) return Result.error(400, "Produto não encontrado.");

    await productRepository.deleteProduct(id);

    return Result.success(200, "Produto excluido com sucesso.", id);
  }
}
