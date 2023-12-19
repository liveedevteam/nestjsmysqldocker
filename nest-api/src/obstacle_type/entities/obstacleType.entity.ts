import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ObstacleType {
  @PrimaryGeneratedColumn()
  obstacle_type_id: number;

  @Column()
  obstacle_type_name: string;

  @Column()
  note: string;

  @Column({ nullable: true })
  status: number;

  @Column({ length: 255, nullable: true })
  create_by: string;

  @Column({ type: 'datetime', nullable: true })
  create_date: Date;

  @Column({ length: 255, nullable: true })
  update_by: string;

  @Column({ type: 'datetime', nullable: true })
  update_date: Date;

  @Column({ length: 255, nullable: true })
  delete_by: string;

  @Column({ type: 'datetime', nullable: true })
  delete_date: Date;

}