# [Stori Card Test](https://storicard-newsletter-test.vercel.app/)

This project was built using Next.js 13 as a full-stack framework

The project and the Postgres database are hosted through Vercel.

## Building with:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=**white**)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Project structure

    ├──__tests__           # unit tests
    src
    ├── app                # Next.js 13 app route folder
    ├────── api            # Next.js api's (nextauth & local api's)
    ├── lib                
    ├─-─-─- components     # common ui components
    ├─-─-─- config         # global config files
    ├───-─- constants      # common constants values
    ├───-─- container      # container components (business logic)
    ├───-─- providers      # provider components
    └───-─- services       # api services and axios instances
    └───-─- styles         # global css files and tailwind config

## Project setup

Create a .env file, set the correct node version and include the values that are indicated in the .env.example

> Run project with yarn dev

