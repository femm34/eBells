import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "service_id" })
  id: number

  @Column()
  work_name: string

  @Column()
  work_image_url: string
}
