import { Card, CardContent, Grid, Typography } from "@mui/material";
import CategoryPieChart from "@/app/components/CategoryPieChart";
import LanguageBarChart from "@/app/components/LanguageBarChart";

export default function ChartSection({ categories, languages }) {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Card sx={{ borderRadius: 4, height: "100%" }}>
          <CardContent>
            <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
              Top Languages
            </Typography>

            <LanguageBarChart languages={languages} />
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <Card sx={{ borderRadius: 4, height: "100%" }}>
          <CardContent>
            <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
              Category Breakdown
            </Typography>

            <CategoryPieChart categories={categories} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
