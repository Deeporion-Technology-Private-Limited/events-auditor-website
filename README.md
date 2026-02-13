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
- `npm run start` - Run production server (serves `dist` + enquiry API)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Deployment (Render)

- **Start Command:** `npm run build && node server.js`
- **Environment (set in Render Dashboard):** `SMTP_EMAIL`, `SMTP_PASSWORD` (Gmail App Password for enquiry form). Optional: `VITE_GOOGLE_MAPS_API_KEY` for Contact map.
