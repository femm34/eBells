import { Column, PrimaryGeneratedColumn } from "typeorm";

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

  //user id
}
