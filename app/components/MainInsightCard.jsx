import { Card, CardContent, Typography } from "@mui/material";

export default function MainInsightCard({ summary }) {
  return (
    <Card sx={{ mb: 4, borderRadius: 4, boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)" }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="overline" color="primary" fontWeight={700}>
          Main Insight
        </Typography>

        <Typography variant="h5" fontWeight={700} sx={{ mt: 1, lineHeight: 1.4 }}>
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
}
