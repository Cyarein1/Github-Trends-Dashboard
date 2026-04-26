import { Card, CardContent, Grid, Typography } from "@mui/material";

function StatCard({ label, value }) {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <Typography color="text.secondary">{label}</Typography>
        <Typography variant="h4" fontWeight={800}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function StatsGrid({ source, totalRepos, totalMatches }) {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <StatCard label="Source" value={source} />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <StatCard label="Recent Repos Analysed" value={totalRepos} />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <StatCard label="Total Matches" value={totalMatches.toLocaleString()} />
      </Grid>
    </Grid>
  );
}
