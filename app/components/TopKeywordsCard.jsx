import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

export default function TopKeywordsCard({ keywords }) {
  return (
    <Card sx={{ mb: 5, borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
          Top Keywords
        </Typography>

        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
          {keywords.map((item) => (
            <Chip
              key={item.word}
              label={`${item.word} - ${item.count}`}
              variant="outlined"
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
