import { Material } from "src/materials/entities/material.entity";
import { Order } from "src/orders/entities/order.entity";
import { ProductType } from "src/product_types/entities/product_type.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "product_id" })
  id: number;

  @Column()
  product_name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  description: string;

  @Column()
  image_path: string;

  @ManyToOne(() => Material, (material) => material.products)
  @JoinColumn({ name: 'material_id' })
  material: Material

  @ManyToOne(() => ProductType, (product_type) => product_type.products)
  @JoinColumn({ name: 'product_type_id' })
  product_type_id: ProductType;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[]
}
