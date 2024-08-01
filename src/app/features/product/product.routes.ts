import { Router } from "express";
import { ProductController } from "./controllers";

export default () => {
  const router = Router();

  router.post("/product", ProductController.createProduct);

  router.get("/product", ProductController.listProducts);

  router.put("/product/:id", ProductController.editProduct);

  router.delete("/product/:id", ProductController.deleteProduct);

  return router;
};
