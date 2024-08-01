import { ProductJson } from "../../../models";
import { Result, ResultDTO } from "../../../shared/utils";
import { ProductRepository } from "../repository";

export class ListProductsUsecase {
  async execute(): Promise<ResultDTO> {
    const productRepository = new ProductRepository();

    let products: ProductJson[] = [];

    const productsMain = await productRepository.listProducts();
    products = productsMain.map((product) => product.toJson());

    return Result.success(200, "Produtos listados com sucesso", products);
  }
}
