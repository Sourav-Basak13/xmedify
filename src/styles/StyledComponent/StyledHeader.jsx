import { Box, styled } from "@mui/material";

export const StyledHeader = styled(Box)`
  .head-band {
    padding: 10px;
    background: ${({ theme }) => theme.palette.primary.main};
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 1.5rem;
    letter-spacing: 0%;
    text-align: center;
  }
  .navbar-hero {
    background: linear-gradient(
      81deg,
      #e7f0ff 9.01%,
      rgba(232, 241, 255, 0.47) 89.11%
    );
    height: fit-content;
    padding-bottom: 20vh;
    .extra-div {
      height: 25vh;
      background: ${({ theme }) => theme.palette.primary.main};
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
`;
