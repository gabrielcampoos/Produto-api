import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "product" })
export class ProductEntity {
  @PrimaryColumn()
  public id!: string;

  @Column()
  public sku!: string;

  @Column()
  public name!: string;

  @Column()
  public stock!: number;

  @Column()
  public cost!: number;

  @Column()
  public price!: number;
}
