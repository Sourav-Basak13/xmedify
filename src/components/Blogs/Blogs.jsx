import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "../BlogCard/BlogCard";

export default function Blogs() {
  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography
          color="bg-bottom-nav"
          textAlign="center"
          variant="h2"
          mb={2}
        >
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <BlogCard />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BlogCard />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
