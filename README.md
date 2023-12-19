# NESTJS & MYSQL Docker Compose (Insert data from CSV file with SQL)

## How to run this project
1. git clone
2. cd to root project
3. docker compose up
4. test by postman get all data
```
[GET] http://localhost:3001/obstacle
```
5. test create obstacle by postman
```
[POST] http://localhost:3001/obstacle
--------
Body (Data for Test)
{
  "obstacle_type_id": 3,
  "title": "Sample Obstacle",
  "start_date": "2022-01-01T00:00:00Z",
  "obstacle_status": 1,
  "lat": 13.7563,
  "long": 100.5018,
  "note": "Additional notes",
  "status": 1,
  "province_name": "Bangkok",
  "amphoe_name": "Pathum Wan",
  "tambon_name": "Lumphini",
  "province_code": 10,
  "amphoe_code": 1030,
  "tambon_code": 103001
}
```
