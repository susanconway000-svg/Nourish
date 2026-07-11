# Nourish

A quiet website for women's spiritual, mental, and emotional wellbeing —
home, offerings, and a Stripe-powered checkout for one digital download.

This README is written for you, not for a developer. It walks through
everything you need to edit, and everything you need to set up, in plain
language.

## What to edit before launch

**1. Your offering.** Open `src/lib/products.ts`. Replace the placeholder
name, description, price, and download link with your real one:

```ts
{
  slug: "offering-one",
  name: "Your real offering name",
  description: "A line or two about what she receives.",
  priceDisplay: "$29",       // what shows on the site
  priceInCents: 2900,        // what Stripe actually charges — $29.00
  currency: "usd",
  downloadUrl: "https://...", // the real link to the file she buys
}
```

You can add more offerings later by adding more entries to this same list.

**2. Placeholder text.** Search the site for anything in `[BRACKETS]` —
the circle date/time on the home page, and the contact email in the
footer — and replace with your real details. They live in:
- `src/app/page.tsx` (home page — circle date/time, featured offering)
- `src/components/SiteFooter.tsx` (contact email)

## How payment works (in plain terms)

1. Someone clicks **Buy** on the Offerings page.
2. They're sent to Stripe's own secure checkout page — a page Stripe
   hosts, not this site. Your card details never touch this website at
   all; Stripe handles all of that.
3. After a successful payment, Stripe sends them back to your
   `/thank-you` page with a one-time reference code in the URL.
4. Before showing the download, the site quietly asks Stripe, "was this
   code really paid?" Only if Stripe confirms `paid` does the download
   link appear. Someone who guesses or shares that URL without paying
   will just see a "we couldn't verify that payment" message instead.
5. Stripe also emails the buyer a receipt automatically, so there's a
   backup record even if they lose the page.

## Setting up Stripe (one-time)

You need exactly **one** secret from Stripe:

1. Create a free account at [stripe.com](https://stripe.com) if you
   don't have one.
2. Go to **Developers → API keys** (or
   [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)).
3. Copy the **Secret key** (it starts with `sk_test_...` while you're
   testing, and `sk_live_...` once you're ready to take real payments).
4. **Do not paste it into any file in this project.** Instead:
   - **Locally:** copy `.env.local.example` to a new file named
     `.env.local`, and paste your key after `STRIPE_SECRET_KEY=`.
   - **On Vercel (live site):** go to your project → **Settings →
     Environment Variables** → add a variable named `STRIPE_SECRET_KEY`
     with your key as the value → redeploy.

That's the only key this project needs — checkout redirects straight to
Stripe's hosted page, so there's no separate "publishable key" to wire up
on the front end.

## Deploying (the easy way)

This project is set up to deploy on **Vercel's free tier**, which connects
directly to your GitHub repo:

1. Go to [vercel.com](https://vercel.com) and sign up (free — you can use
   your GitHub account to sign in).
2. Click **Add New → Project**, and pick this GitHub repository.
3. Vercel will detect it's a Next.js app automatically — you don't need to
   change any build settings.
4. Before clicking Deploy, add the `STRIPE_SECRET_KEY` environment
   variable as described above.
5. Click **Deploy**. You'll get a live URL in about a minute.
6. From then on, every time this code is pushed to GitHub, Vercel
   redeploys automatically — no extra steps.

You can add your own domain name later from the same Vercel project
settings, under **Domains**.

## Running it on your own computer (optional)

Only needed if you want to preview changes before they go live.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What's not wired up yet

The email signup form on the home page is a plain form — it doesn't send
anywhere yet. When you're ready, connect it to an email tool you like
(Mailchimp, ConvertKit, Buttondown all have simple "embed a form" options),
and I can help wire it in.
