import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Obstacle {
  @PrimaryGeneratedColumn()
  obstacle_id: number;

  @Column()
  obstacle_type_id: number;

  @Column({ length: 255, nullable: true })
  title: string;

  @Column({ type: 'datetime', nullable: true })
  start_date: Date;

  @Column({ type: 'dec', nullable: true })
  obstacle_status: number;

  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  lat: number;

  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  long: number;

  @Column({ type: 'text', nullable: true })
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

  @Column({ type: 'datetime', nullable: true })
  end_date: Date;

  @Column({ length: 255, nullable: true })
  province_name: string;

  @Column({ length: 255, nullable: true })
  amphoe_name: string;

  @Column({ length: 255, nullable: true })
  tambon_name: string;

  @Column({ length: 255, nullable: true })
  mooban_name: string;

  @Column({ nullable: true })
  province_code: number;

  @Column({ nullable: true })
  amphoe_code: number;

  @Column({ nullable: true })
  tambon_code: number;

  @Column({ nullable: true })
  mooban_code: number;
}