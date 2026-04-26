"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Error({ error, reset }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f6f8fb", py: 6 }}>
      <Container maxWidth="sm">
        <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
          <Typography variant="h4" fontWeight={800}>
            Could not load trends
          </Typography>

          <Typography color="text.secondary">
            Something went wrong while fetching or processing GitHub data.
          </Typography>

          {error?.message && (
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
              {error.message}
            </Typography>
          )}

          <Button variant="contained" onClick={reset}>
            Try again
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
