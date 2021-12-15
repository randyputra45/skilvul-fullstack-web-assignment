## Step install dependensi
npm install mysql2 --save
npm install sequelize
npm install -g sequelize-cli
sequelize-cli init

## Set nama database terlebih dahulu di bagian development
set nama database di config.json -> "database": "nama_db"

## Create database menggunakan command sequelize
sequelize-cli db:create --development
sequelize-cli db:create --test
sequelize-cli db:create --production

## Create model/tabel (model saved in folder migrations)
sequelize-cli model:generate --name Hewan --attributes id:integer,nama:string,namaSpesies:string,umur:integer

## Run migration
sequelize-cli db:migrate

## Undo/drop migration incase there is update and data still empty
sequelize-cli db:migrate:undo

## Membuat seeder (seeder untuk generate data awal pada saat create database)
sequelize-cli seed:generate --name NamaSeeder

## Running seeder
sequelize-cli db:seed:all
sequelize-cli db:seed -seed 20211-FileSeeder.js