import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  SvgIcon,
  Stack,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function StarIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.211.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.194a.751.751 0 0 1-1.088.791L8 12.347l-3.767 1.982a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.211-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </SvgIcon>
  );
}

function ForkIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M5 5.25a2.25 2.25 0 1 1-2.5-2.236V2.25a.75.75 0 0 1 1.5 0v.764A2.251 2.251 0 0 1 5 5.25Zm6 0a2.25 2.25 0 1 1 2.5 2.236v1.264A2.25 2.25 0 0 1 11.25 11h-2.5A.75.75 0 0 0 8 11.75v.764a2.25 2.25 0 1 1-1.5 0v-.764A2.25 2.25 0 0 1 8.75 9.5h2.5a.75.75 0 0 0 .75-.75V7.486a2.25 2.25 0 0 1-1-2.236ZM3.75 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-4.5 10a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
    </SvgIcon>
  );
}

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
        <StarIcon fontSize="small" aria-hidden="true" sx={{ color: "#f2cc60" }} />
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
        <ForkIcon fontSize="small" aria-hidden="true" sx={{ color: "#57606a" }} />
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
