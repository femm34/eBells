import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "transaction_id" })
  id: number

  @Column()
  date: string

  @Column()
  payment_method: number
}
