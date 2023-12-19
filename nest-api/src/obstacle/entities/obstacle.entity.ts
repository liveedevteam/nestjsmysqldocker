import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Obstacle {
  @PrimaryGeneratedColumn()
  obstacle_id: number;

  @Column()
  obstacle_type_id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'datetime' })
  start_date: Date;

  @Column()
  obstacle_status: number;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  lat: number;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  long: number;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column()
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

  @Column({ type: 'datetime', nullable: true })
  end_date: Date;

  @Column({ length: 255 })
  province_name: string;

  @Column({ length: 255 })
  amphoe_name: string;

  @Column({ length: 255 })
  tambon_name: string;

  @Column({ length: 255, nullable: true })
  mooban_name: string;

  @Column()
  province_code: number;

  @Column()
  amphoe_code: number;

  @Column()
  tambon_code: number;

  @Column({ nullable: true })
  mooban_code: number;
}