# Vikram Bhanwala — Portfolio

Personal site for [Vikram Bhanwala](https://www.linkedin.com/in/vikrambhanwala), Full Stack Developer at The Brand Bee.

Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lenis.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (SMTP)

Copy `.env.example` to `.env.local` and add Gmail SMTP values. Never commit `.env.local`.

```bash
cp .env.example .env.local
```

Required keys:

- `SMTP_HOST` — `smtp.gmail.com`
- `SMTP_PORT` — `465`
- `SMTP_USER` — Gmail address
- `SMTP_PASS` — Gmail app password
- `SMTP_TO` — inbox that receives leads

## Scripts

```bash
npm run dev
npm run build
npm run start
```
