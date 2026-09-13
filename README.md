This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load the Cinzel and Manrope fonts from Google Fonts. Production builds need network access to download these fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration and checks

Copy `.env.local.example` to `.env.local` and configure `RESEND_API_KEY`,
`CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` to enable contact and membership
emails. The sender domain must be verified in Resend for production delivery.
Without an API key, forms return an error and offer a direct email link.
For production, use the verified `islamiccenteroflaveen.org` domain as the
sender: `CONTACT_FROM_EMAIL=contact@islamiccenteroflaveen.org`.

Prayer coordinates, the Phoenix timezone, and manually maintained Iqama and
Jumu'ah times are in `lib/iqama-config.ts`. Adhan times are fetched from AlAdhan
using a cache key for the current Phoenix date; invalid or unavailable responses
show an unavailable message. Keep the manually maintained times up to date.

Run `npm run lint`, `npm test`, and `npm run build` before deploying.
The regression tests mock external services and do not send email.

## Admin schedule updates

The private admin console is available at `/icl-admin-portal`. It updates the
flat JSON content file used by the public home, prayer-times, events, and
announcement sections. Set `ICL_ADMIN_PASSWORD` in Railway before sharing the
console with the two admins. The code fallback password is intended only for
initial local testing and should be replaced in production.

For Railway persistence, create and mount a persistent volume, then set
`ICL_CONTENT_FILE` to a path on that volume, for example
`/data/site-content.json`. Without a persistent volume, changes made through
the console can be lost when Railway replaces or restarts the container.

## Monthly visitor count

The footer shows the number of unique visitors for the current Phoenix calendar
month. It uses an anonymous, HTTP-only visitor cookie and stores only a SHA-256
hash of that ID. Set `ICL_VISITOR_FILE` to a path on the Railway persistent
volume, for example `/data/visitor-count.json`. The counter automatically starts
fresh when the month changes; without the mounted volume it can reset whenever
Railway replaces or restarts the container.
