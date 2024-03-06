import { Order } from "src/orders/entities/order.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "card_id" })
  id: number;

  @Column()
  card_number: number;

  @Column()
  expiration: string;

  @Column()
  type_card: string;

  @Column()
  cardholder: string;

  @ManyToOne(() => User, (user) => user.cards)
  @JoinColumn({ name: "user_id" })
  user: User

  @OneToMany(() => Order, (order) => order.card)
  order: Order[]
}
