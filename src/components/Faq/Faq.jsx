import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../assest/faqs-banner.jpg";
import { faqs } from "../../config/constant";
import CustomAccordion from "../../ui/Accordion/Accordion";

function Faq() {
  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography
          color="bg-bottom-nav"
          textAlign="center"
          variant="h2"
          mb={2}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box src={faqBanner} component="img" width={1} height="auto" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box maxWidth={450}>
              <CustomAccordion data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Faq;
