import { CATEGORIES, STOP_WORDS } from "@/lib/constants";

function countLanguages(repos) {
  const counts = {};

  repos.forEach((repo) => {
    const language = repo.language || "Unknown";
    counts[language] = (counts[language] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function extractKeywords(repos) {
  const wordCounts = {};

  repos.forEach((repo) => {
    const text = [
      repo.name,
      repo.fullName,
      repo.description,
      ...(repo.topics || []),
    ]
      .join(" ")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ");

    const words = text.split(/\s+/).filter(Boolean);

    words.forEach((word) => {
      if (word.length < 3) return;
      if (/^\d+$/.test(word)) return;
      if (STOP_WORDS.has(word)) return;

      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  });

  return Object.entries(wordCounts)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

function categorizeRepos(repos) {
  const categoryCounts = {};

  CATEGORIES.forEach((category) => {
    categoryCounts[category.name] = 0;
  });

  categoryCounts.Other = 0;

  repos.forEach((repo) => {
    const text = [
      repo.name,
      repo.fullName,
      repo.description,
      ...(repo.topics || []),
    ]
      .join(" ")
      .toLowerCase();

    const matchedCategory = CATEGORIES.find((category) =>
      category.keywords.some((keyword) => text.includes(keyword))
    );

    if (matchedCategory) {
      categoryCounts[matchedCategory.name] += 1;
    } else {
      categoryCounts.Other += 1;
    }
  });

  return Object.entries(categoryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

function generateSummary({ topLanguage, topKeyword, topCategory, totalRepos }) {
  return `From the ${totalRepos} GitHub repositories created in the last 30 days, the strongest visible theme is ${topCategory}. ${topLanguage} appears as the most common primary language, and "${topKeyword}" is one of the most repeated keywords. This shows which technologies and topics are appearing most often in the current sample.`;
}

export { countLanguages, extractKeywords, categorizeRepos, generateSummary };
