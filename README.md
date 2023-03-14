
## Workflows

Workflows is an open source application that provides a frontend and backend to organize your day. The application is built using a monolithic architecture and utilizes the following technologies:

- [Svelte Kit](https://kit.svelte.dev/) for building the frontend
- [Prisma](https://www.prisma.io/) for managing the database
- [PostgreSQL](https://www.postgresql.org/) as the database system
- [TypeScript](https://www.typescriptlang.org/) as the programming language


To install and run Workflows on your local machine, follow these steps:

1. Clone the repository
```
git clone https://github.com/edlingao/workflows.git
```

2. Install dependencies:
```
cd workflows
npm install
```

3. Apply database migrations:
```
npx prisma migrate dev --name init
```

4. Start the development server:
```
npm run dev
```

Open your web browser and go to http://localhost:3000 to access the application.

## Features
Workflows provides the following features to organize your day:

### Calendar
Workflows implements a calendar to allow you to view your activities by day, week, and month.

### Home Page
The home page provides a view of all your activities for today and tomorrow. The activities for today are highlighted as time passes.

### Notifications
Workflows sends a notification when an activity is finished and the new one starts.

### Tasks
Tasks can be associated with a range of time and are included on the homepage. You have the option to mark them as done and they will disappear, or they can be persistent and bound to your time range.

## Contribution

If you would like to contribute to Workflows, please follow the steps below:

1. Fork the repository to your own account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes:

```
git checkout -b my-new-feature
```
4. Make the necessary changes and commit them:
```
git commit -m "Add my new feature"
```
5. Push your changes to your forked repository:
```
git push origin <username>/my-new-feature
```
6. Create a new pull request to merge your changes into the original repository.


