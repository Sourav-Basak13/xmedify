import { Stack, styled } from "@mui/material";

export const DaySelectorWrapper = styled(Stack)`
  .swiperslide {
    width: calc(100% / 3 - 20px) !important;
    overflow: hidden;
  }

  .swiperStyles {
    padding: 0 50px;
    width: 100%;
  }

  @media (max-width: 900px) {
    .swiperStyles {
      padding: 0;
    }
    .swiperslide {
      width: auto !important;
    }
  }
`;
