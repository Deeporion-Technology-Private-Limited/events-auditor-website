# Events Auditor AJCO Website

Professional event auditing and consultancy services website.

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Deployment (Vercel)

Deploy with [Vercel](https://vercel.com). The contact form uses the serverless function at `/api/enquiry`.

- **Environment (Vercel Dashboard → Project → Settings → Environment Variables):** `SMTP_EMAIL`, `SMTP_PASSWORD` (Gmail App Password for enquiry emails).
