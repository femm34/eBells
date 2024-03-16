import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: "service_id" })
  id: number

  @Column()
  service_name: string

  @Column()
  service_description: string

  @Column()
  service_image_url: string
}
