
# Tweets T3

Simple tweets web app based on T3 stack



## Demo

https://tweets-t3.vercel.app/tweets


## Features

- Create and view posts
- Create and view comments


## Stack

- Nextjs
- Typescript
- Mantine
- tRPC
- Prisma
- Postgresql




## Screenshots

![App Screenshot](https://i.ibb.co/pvBVxn3/tweets1.jpg)

![App Screenshot](https://i.ibb.co/kK4579T/tweets2.jpg)

![App Screenshot](https://i.ibb.co/nM3WGR9/tweet3.jpg)







## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`



## Run Locally
You need to have nodejs and docker installed

Clone the project

```bash
  git clone https://github.com/Elalfy74/tweets-t3
```

Go to the project directory

```bash
  cd tweets-t3
```

Install dependencies

```bash
  yarn
```

Start the database

```bash
  yarn db:up
```

Migrate the database

```bash
  npx prisma migrate deploy
```

Start the server

```bash
  yarn start
```

