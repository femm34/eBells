import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "role_id" })
  id: number

  @Column()
  role_name: string

  @Column()
  permissions_number: number

  @OneToMany(() => User, (user) => user.role)
  users: User[]
}
