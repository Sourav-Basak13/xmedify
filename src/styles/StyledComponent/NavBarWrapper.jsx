import { Box, styled } from "@mui/material";

export const NavBarWrapper = styled(Box)`
  .MuiToolbar-root {
    padding: 0px 34px;
    .logo-text {
      font-weight: 700;
      font-style: Bold;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 2%;
      color: ${({ theme }) => theme.palette.primary.main};
      column-gap: 2px;
    }
    .menu-item {
      text-transform: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      color: ${({ theme }) => theme.palette.text.secondary};
    }
    .bookings-btn {
      margin-left: 12px;
      padding: 10px;
      border-radius: 8px;
      font-weight: 500;
      font-style: Medium;
      font-size: 14px;
      line-height: 100%;
      color: ${({ theme }) => theme.palette.text.primary};
      text-transform: none;
    }
  }
`;
