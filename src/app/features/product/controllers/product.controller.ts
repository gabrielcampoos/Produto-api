import { Request, Response } from "express";
import { httpHelper, Result } from "../../../shared/utils";
import {
  CreateProductUsecase,
  DeleteProductUsecase,
  EditProductUsecase,
  ListProductsUsecase,
} from "../usecases";

export class ProductController {
  static async createProduct(request: Request, response: Response) {
    const { sku, name, stock, cost, price } = request.body;

    try {
      const usecase = new CreateProductUsecase();

      const result = await usecase.execute({
        sku,
        name,
        stock,
        cost,
        price,
      });

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async listProducts(request: Request, response: Response) {
    try {
      const usecase = new ListProductsUsecase();

      const result = await usecase.execute();

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async editProduct(request: Request, response: Response) {
    const { id } = request.params;
    const { sku, name, stock, cost, price } = request.body;

    try {
      const usecase = new EditProductUsecase();

      const result = await usecase.execute({
        id,
        newData: {
          sku,
          name,
          stock,
          cost,
          price,
        },
      });

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(response, error.toString());
    }
  }

  static async deleteProduct(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const usecase = new DeleteProductUsecase();

      const result = await usecase.execute(id);

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(response, error.toString());
    }
  }
}
