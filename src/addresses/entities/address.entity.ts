import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "address_id" })
  id: number;

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

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: "user_id" })
  user: User

}
