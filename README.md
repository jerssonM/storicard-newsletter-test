# [Stori Card Test](https://storicard-newsletter-test.vercel.app/)

This project was built using Next.js 13 as a full-stack framework and consists of a small newsletter application which allows:

- Viewing subscribed users
- Subscribing new users
- Sending a newsletter to all users with a predefined HTML template
- Sending a newsletter with photo a attachment
- Unsubscribing a user via the received email link

This project uses Next.js as a full-stack framework through its new features such as app router and server components, which allow for creating pages and APIs without the need for an external backend under the same framework. Our pages directly consume these local APIs, which, through the Prismic ORM and the Nodemailer library, perform operations in the database and manage email sending. In the project's structure, we can see the implementation of a container pattern, which allows for the separation of business logic from UI logic.

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
    |-src
    ├── app                # Next.js 13 app route folder
    ├────── api            # Next.js api's (nextauth & local api's)
    ├─- components         # common ui components
    ├── lib                
    ├─-─-─- config         # global config files
    └───-─- services       # api services and axios instances

## Project setup

To run this project locally, you need the following requirements:

- Set up a PostgreSQL database
- Generate an application password, preferably from Gmail
- Set the environment variables as indicated in the .env.example file with the previous steps
- Install dependencies with `yarn install`
- Run project with `yarn dev`

> If you prefer to skip these steps, you can also view the deployed version of the project on Vercel at the following [link](https://storicard-newsletter-test.vercel.app).
