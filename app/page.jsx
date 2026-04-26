import { getGithubData, getInsights } from "@/lib/api";
import ChartSection from "@/app/components/ChartSection";
import DashboardHeader from "@/app/components/DashboardHeader";
import MainInsightCard from "@/app/components/MainInsightCard";
import RepoList from "@/app/components/RepoList";
import StatsGrid from "@/app/components/StatsGrid";
import TopKeywordsCard from "@/app/components/TopKeywordsCard";
import { Box, Container } from "@mui/material";

export default async function Home() {
  const [data, insights] = await Promise.all([getGithubData(), getInsights()]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f6f8fb", color: "#111827", py: 6 }}>
      <Container maxWidth="lg">
        <DashboardHeader />
        <MainInsightCard summary={insights.summary} />
        <StatsGrid
          source={data.source}
          totalRepos={insights.totalRepos}
          totalMatches={data.totalCount}
        />
        <ChartSection
          categories={insights.categories}
          languages={insights.topLanguages}
        />
        <TopKeywordsCard keywords={insights.topKeywords} />
        <RepoList repos={data.repos} />
      </Container>
    </Box>
  );
}
