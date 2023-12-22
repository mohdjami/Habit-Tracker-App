# habiT-Tracker

Habit-Tracker is an open-source habit tracking app that lets you track daily habits and monitor your activity streaks and progress with little effort.

![og image](/public/op.png)

## Features

- User-friendly Interface
- Habit/Activity Tracking
- Activity Streak Monitoring
- Dashboard Analytics
- Google Authentication
- Web Push Notifications (coming soon)
- Cross-platform Support (PWA)

## Stack

- [Next.js](https://nextjs.org) `/app` dir
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) Components
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://www.prisma.io) ORM
- [Zod](https://zod.dev) Validations
- [Supabase](https://supabase.com) Database (MySQL)

## Running Locally

1. Clone the repository.

```bash
git clone https://github.com/mohdjami/Habit-Tracker
```
2. Install dependencies using npm.

```bash
npm install
```

3. Copy `env.example` to `env.local` and update the variables.

```bash
cp .env.example .env.local
```

4. Generate prisma client before starting development server.

```bash
npm run postinstall
```

5. Start the development server.

```bash
npm run dev
```

