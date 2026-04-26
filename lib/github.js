function getDateDaysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
}

function buildGithubQuery() {
  return `created:>${getDateDaysAgo(30)}`;
}

async function fetchGithubData() {
  const query = buildGithubQuery();

  const response = await fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(
      query
    )}&sort=stars&order=desc&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub data: ${response.status}`);
  }

  return response.json();
}

function processGithubData(data) {
  const repos = data.items.map((repo) => ({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url,
    topics: repo.topics || [],
    updatedAt: repo.updated_at,
  }));

  return Response.json({
    source: "GitHub",
    totalCount: data.total_count,
    count: repos.length,
    repos,
  });
}

export { fetchGithubData, processGithubData };
