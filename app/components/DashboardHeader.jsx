import { Box, Typography } from "@mui/material";

export default function DashboardHeader() {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="overline" color="primary" fontWeight={700}>
        GitHub Trends Insight Dashboard
      </Typography>

      <Typography variant="h3" fontWeight={800} sx={{ mt: 1 }}>
        What is trending right now?
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
        This app looks at repositories created in the last 30 days, sorts them
        by star count, and turns that sample into simple insights about current
        technology trends.
      </Typography>
    </Box>
  );
}
