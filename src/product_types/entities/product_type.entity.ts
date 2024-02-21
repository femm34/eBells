import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductType {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "product_type_id" })
  id: number

  @Column()
  product_type_name: string

  @OneToMany(() => Product, (product) => product.product_type_id)
  products: Product[]

}
