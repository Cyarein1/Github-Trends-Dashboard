import { Box, CircularProgress, Container, Stack, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f6f8fb", py: 6 }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ alignItems: "center", justifyContent: "center", minHeight: 360 }}>
          <CircularProgress />
          <Typography sx={{ color: "#111827", fontWeight: 700 }}>
            Loading the latest GitHub trend data...
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
