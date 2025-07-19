import { Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import { BookingContext } from "../../layout/WebWrapper/WebWrapper";
import cta from "../../assest/cta.png";

function MyBookings() {
  const { _bookings, _filteredBookings } = useContext(BookingContext);
  console.log(_filteredBookings[0], "_filteredBookings");
  return (
    <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
      jhfjfkjf
      <Stack alignItems="flex-start" direction={{ md: "row" }}>
        <Stack
          mb={{ xs: 4, md: 0 }}
          spacing={3}
          width={{ xs: 1, md: "calc(100% - 384px)" }}
          mr="24px"
        >
          {_filteredBookings[0].length > 0 &&
            _filteredBookings[0].map((hospital) => (
              <HospitalCard
                key={hospital["Hospital Name"]}
                details={hospital}
                booking={true}
              />
            ))}

          {_filteredBookings[0].length == 0 && (
            <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
              No Bookings Found!
            </Typography>
          )}
        </Stack>

        <img src={cta} width={360} height="auto" />
      </Stack>
    </Container>
  );
}

export default MyBookings;
