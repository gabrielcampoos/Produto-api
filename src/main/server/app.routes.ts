import { Express } from "express";
import productRoutes from "../../app/features/product/product.routes";

export const makeRoutes = (app: Express) => {
  app.use(productRoutes());
};
