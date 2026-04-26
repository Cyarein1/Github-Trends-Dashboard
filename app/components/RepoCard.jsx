import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function RepoStats({ stars, forks }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      color="text.secondary"
      sx={{ alignItems: "center" }}
    >
      <Stack
        direction="row"
        spacing={0.5}
        aria-label={`${stars.toLocaleString()} stars`}
        sx={{ alignItems: "center" }}
      >
        <Typography component="span" aria-hidden="true">
          ⭐
        </Typography>
        <Typography component="span" color="inherit">
          {stars.toLocaleString()}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={0.5}
        aria-label={`${forks.toLocaleString()} forks`}
        sx={{ alignItems: "center" }}
      >
        <Typography component="span" aria-hidden="true">
          ⑂
        </Typography>
        <Typography component="span" color="inherit">
          {forks.toLocaleString()}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function RepoCard({ repo }) {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Box>
            <Typography variant="h6" fontWeight={800}>
              {repo.fullName}
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {repo.description || "No description available"}
            </Typography>

            <Stack direction="row" sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
              {repo.language && (
                <Chip label={repo.language} color="primary" size="small" />
              )}

              {repo.topics.slice(0, 5).map((topic) => (
                <Chip key={topic} label={topic} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>

          <Stack sx={{ alignItems: { xs: "flex-start", md: "flex-end" } }} spacing={1}>
            <RepoStats stars={repo.stars} forks={repo.forks} />

            <Button
              href={repo.url}
              target="_blank"
              variant="outlined"
              size="small"
              endIcon={<OpenInNewIcon />}
            >
              View Repo
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
