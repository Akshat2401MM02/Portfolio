# Akshat Agrawal — Portfolio (MERN)

A multipage, animated portfolio built with MongoDB, Express, React (Vite) and Node — themed around
a materials-science "phase diagram" motif (molten-metal orange on graphite, since you're a
metallurgical engineering student who also codes).

## Structure

```
portfolio-mern/
├── client/          React (Vite) + Tailwind + Framer Motion
└── server/          Express + Mongoose API
```

## Important — about MongoDB Atlas

You already have a cluster on Atlas and don't want to pay for a second one. You don't need to.
A single free-tier (M0) cluster can hold **as many separate databases as you like** — creating a
new *database* inside your existing cluster costs nothing extra, you only pay if you spin up a
*new cluster*. So:

1. Go to your existing Atlas cluster → "Connect" → "Drivers" → copy your connection string
   (it looks like `mongodb+srv://<user>:<password>@<your-cluster>.mongodb.net/`).
2. In that string, just add a **new database name** at the end, e.g.
   `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/portfolioDB?retryWrites=true&w=majority`
   `portfolioDB` will be auto-created the first time data is written — no new cluster needed.
3. Paste that full string into `server/.env` as `MONGODB_URI` (see below).

## Setup

### 1. Server

```bash
cd server
npm install
cp .env.example .env
# edit .env and paste your MONGODB_URI (same cluster, new db name as above)
npm run seed      # loads your resume data (projects/achievements) into MongoDB
npm run dev       # starts API on http://localhost:5000
```

### 2. Client

```bash
cd client
npm install
npm run dev        # starts site on http://localhost:5173
```

The client talks to the API at `http://localhost:5000/api` (configurable in `client/src/api.js`).

## What's dynamic vs static

- **Projects & Achievements**: stored in MongoDB, fetched by the React app — edit them any time by
  updating `server/seed.js` and re-running `npm run seed`, no code redeploy needed.
- **Contact form**: messages POST to the API and are saved in MongoDB (collection `messages`) so
  you actually receive/keep them, instead of just `mailto:`.
- **Resume/education/skills**: static content in the React components (fine, since it barely changes).

## Deployment notes (when you're ready)

- Client: deploy free on Vercel or Netlify.
- Server: deploy free on Render (free web service tier) — just set the same `MONGODB_URI` env var there.
- Both point at the **same existing Atlas cluster** — no new cluster, no new cost.
