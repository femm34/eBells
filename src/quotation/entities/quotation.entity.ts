import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quotation {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "quotation_id" })
  id: number

  @Column()
  name: string

  @Column()
  cellphone_number: string

  @Column()
  client_email: string

  @Column()
  message: string
}
