export class ObstacleDto {
    obstacle_id: number;
    obstacle_type_id: number;
    title: string;
    start_date: Date;
    obstacle_status: number;
    lat: number;
    long: number;
    note?: string;
    status: number;
    create_by?: string;
    create_date?: Date;
    update_by?: string;
    update_date?: Date;
    delete_by?: string;
    delete_date?: Date;
    end_date?: Date;
    province_name: string;
    amphoe_name: string;
    tambon_name: string;
    mooban_name?: string;
    province_code: number;
    amphoe_code: number;
    tambon_code: number;
    mooban_code?: number;
  }
  