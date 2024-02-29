import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Adress {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "address_id" })
  id: number

  @Column()
  recipient_name: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  apartment_number: string;

  @Column()
  phone_number: number;

  @Column()
  postal_code: number;

  @Column()
  additional_contact_number: number;

  @Column()
  landmarks: string;

  //user id
}
