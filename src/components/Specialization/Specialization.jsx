import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { specialization_data } from "../../config/constant";
import IconCard from "../IconCard/IconCard";

export default function Specialization() {
  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by specialisation
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          {specialization_data.map((item) => (
            <Grid size={{ xs: 4, md: 3 }} key={item.title}>
              <IconCard
                img={item.icon}
                title={item.title}
                bgColor={"#FFFFFF"}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={(theme) => ({ color: theme.palette.text.primary })}
        >
          View All
        </Button>
      </Container>
    </Box>
  );
}
