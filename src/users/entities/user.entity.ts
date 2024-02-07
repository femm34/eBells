import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
