import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableProduct1707417245645 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "product",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "sku",
            type: "varchar",
            length: "50",
          },
          {
            name: "name",
            type: "varchar",
            length: "50",
          },
          {
            name: "stock",
            type: "int4",
          },
          {
            name: "cost",
            type: "float8",
          },
          {
            name: "price",
            type: "float8",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("os", true, true, true);
  }
}
