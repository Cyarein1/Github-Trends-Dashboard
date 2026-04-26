import { countLanguages, extractKeywords, categorizeRepos, generateSummary } from "@/lib/insights";

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/github`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch GitHub data for insights" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const repos = data.repos;

    const topLanguages = countLanguages(repos);
    const topKeywords = extractKeywords(repos);
    const categories = categorizeRepos(repos);

    const summary = generateSummary({
      topLanguage: topLanguages[0]?.name || "Unknown",
      topKeyword: topKeywords[0]?.word || "N/A",
      topCategory: categories[0]?.name || "Uncategorized",
      totalRepos: repos.length,
    });

    return Response.json({
      source: "GitHub",
      totalRepos: repos.length,
      topLanguages,
      topKeywords,
      categories,
      summary,
    });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong", details: error.message },
      { status: 500 }
    );
  }
}
