import { Box, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import icon from "../../assest/tick.png";
import cta from "../../assest/cta.png";
import HospitalCard from "../../components/HospitalCard/HospitalCard";
import BookingModal from "../../components/BookingModal/BookingModal";
import AutohideSnackbar from "../../components/AutohideSnackbar/AutohideSnackbar";

function Search() {
  const [seachParams, setSearchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //API to fetch hospitals based on state and city selection
  useEffect(() => {
    const getHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const data = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHospitals(data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    if (state && city) {
      getHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(seachParams.get("state"));
    setCity(seachParams.get("city"));
  }, [seachParams]);

  // show booking modal
  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
        {hospitals.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography
              component="h1"
              fontSize={24}
              lineHeight={1.1}
              mb={2}
              fontWeight={500}
              color="dark-black"
            >
              {`${hospitals.length} medical centers available in `}
              <span style={{ textTransform: "capitalize" }}>
                {city.toLocaleLowerCase()}
              </span>
            </Typography>
            <Stack direction="row" spacing={2}>
              <img src={icon} height={24} width={24} alt="icon" />
              <Typography color="#787887" lineHeight={1.4}>
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Stack>
          </Box>
        )}

        <Stack alignItems="flex-start" direction={{ md: "row" }}>
          <Stack
            mb={{ xs: 4, md: 0 }}
            spacing={3}
            width={{ xs: 1, md: "calc(100% - 384px)" }}
            mr="24px"
          >
            {hospitals.length > 0 &&
              hospitals.map((hospital) => (
                <HospitalCard
                  key={hospital["Hospital Name"]}
                  details={hospital}
                  availableSlots={availableSlots}
                  handleBooking={handleBookingModal}
                />
              ))}

            {isLoading && (
              <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                Loading...
              </Typography>
            )}

            {!state && (
              <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                Please select a state and city
              </Typography>
            )}
          </Stack>

          <img src={cta} width={360} height="auto" alt="banner" />
        </Stack>
      </Container>
      <BookingModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        bookingDetails={bookingDetails}
        showSuccessMessage={setShowBookingSuccess}
      />

      <AutohideSnackbar
        open={showBookingSuccess}
        setOpen={setShowBookingSuccess}
        message="Booking Successful"
      />
    </>
  );
}

export default Search;
