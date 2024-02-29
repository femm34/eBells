import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "role_id" })
  id: number

  @Column()
  material_name: string

  @OneToMany(() => Product, (product) => product.material)
  products: Product[]
}
