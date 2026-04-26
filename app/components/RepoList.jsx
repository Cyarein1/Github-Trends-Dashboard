import { Stack, Typography } from "@mui/material";
import RepoCard from "@/app/components/RepoCard";

export default function RepoList({ repos }) {
  return (
    <>
      <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
        Raw Repository Data
      </Typography>

      <Stack spacing={2}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </Stack>
    </>
  );
}
