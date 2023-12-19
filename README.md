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

## NEST-API (DEV)
1. Go to nest-api
```
cd ./nest-api
```
2. create .env file
```
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=Prevent_Disaster
```
3. Run database from docker-compose (Comment nest-api service in compose)
```
docker compose up
```
4. Install node_modules
```
npm i
```
5. Run dev mode
```
npm run start:dev
```
