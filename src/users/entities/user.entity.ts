import { Address } from 'src/addresses/entities/address.entity';
import { Card } from 'src/cards/entities/card.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "user_id" })
  id: number

  @Column()
  full_name: string

  @Column({ unique: true })
  email: string

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[]

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[]

  @OneToMany(() => Card, (card) => card.user)
  cards: Card[]

  constructor() {
    this.role = { id: 3 } as Role; //this automatically sets the user role as 3 that is equal to "client" role
  }
}
