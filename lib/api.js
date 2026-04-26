const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

async function getGithubData() {
  const res = await fetch(`${baseUrl}/api/github`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  return res.json();
}

async function getInsights() {
  const res = await fetch(`${baseUrl}/api/insights`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch insights");
  }

  return res.json();
}

export { getGithubData, getInsights };
