# Lend SQR

## Description 
A wallet API application that enable user to deposit, withdraw, and transfer funds from their wallets

## Tools
- Node js (Express Js)
- MySQL
- Knex Js
- Docker

## Development Setup
- ### Prerequisite
    - MySQL database
    - Knex CLI installed. This can be installed with `npm install knex -g`
- Clone the repository with `git clone -b lendsqr-funds --single-branch https://github.com/Urchmaney/interview_challenge.git`
- Add a `.env` file in the root directory with the following key.
    -  DATABASE_USER
    -  DATABASE_PASSWORD
    -  DATABASE_NAME
    -  DATABASE_HOST
    -  APP_SECRET
- Run Migration `npm run knex:migrate`
- Install dependencies with `npm install`
- Start application with `npm run start:dev` 

## Development Setup (Docker)
- ### Prerequisite
    - [Docker](https://docs.docker.com/engine/install/ubuntu/)
- Clone the repository with `git clone -b lendsqr-funds --single-branch https://github.com/Urchmaney/interview_challenge.git`
- Add a `.env` file in the root directory with the following key.
    -  DATABASE_USER
    -  DATABASE_PASSWORD
    -  DATABASE_NAME
    -  DATABASE_HOST
    -  APP_SECRET
- Start containers with `docker-compose up -d`

## Schema
Currently using three tables
- Users
- Wallets
- Wallets Transactions

Schema diagram is as follow:
<br>
![alt text](https://res.cloudinary.com/garhia/image/upload/v1680748119/schema_v5r4hb.png) `


## Usage
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3479940-f6b92468-f066-4659-8190-3c443ec61730?action=collection%2Ffork&collection-url=entityId%3D3479940-f6b92468-f066-4659-8190-3c443ec61730%26entityType%3Dcollection%26workspaceId%3D986ec943-d7fc-4b87-9d2b-b6cc46698dec)