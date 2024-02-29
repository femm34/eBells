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

  @Column()
  address: string

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[]

  constructor() {
    this.role = { id: 2 } as Role; //this automatically sets the user role as 2 that is equal to "client" role
  }
}
