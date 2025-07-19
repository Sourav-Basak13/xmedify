import { Box, Container } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import offer1 from "../../assest/offer1.png";
import offer2 from "../../assest/offer2.png";
import { OffersWrapper } from "../../styles/StyledComponent/OffersWrapper";

export default function Offers() {
  return (
    <OffersWrapper py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Box component={"img"} src={offer1} width={1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} width={1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer1} width={1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} width={1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer1} width={1} />
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} width={1} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </OffersWrapper>
  );
}
