# GitHub Trends Dashboard

A Next.js dashboard that fetches public GitHub repository data, summarizes trends,
and visualizes languages, categories, keywords, stars, and forks.

Live app: https://github-trends-dashboard.vercel.app/

## What It Answers

The app answers: **What is trending right now on GitHub, and what can we learn from it?**

For this project, "trending right now" means repositories created in the last
30 days, sorted by star count. This keeps the sample focused on newer projects
that are gaining attention quickly, instead of older repositories that have had
years to collect stars.

## Data Source

The backend uses the public GitHub REST API search endpoint:

- `/api/github` returns the processed raw repository sample.
- `/api/insights` returns summarized insights for the dashboard.

## Current Insight Snapshot

From the current sample of 100 GitHub repositories, the strongest visible theme
is **AI / Automation**. **Python** appears as the most common primary language,
and **"claude"** is one of the most repeated keywords.

This suggests that recent high-star GitHub activity is strongly influenced by
AI tooling, automation, and developer workflows. The exact insight can change
over time because the app fetches live GitHub data and focuses on repositories
created in the last 30 days.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.

## Structure

- `app/page.jsx` composes the dashboard.
- `app/components/` contains reusable dashboard UI.
- `app/api/` exposes local API routes for GitHub data and insights.
- `lib/` contains GitHub fetching and trend analysis helpers.
