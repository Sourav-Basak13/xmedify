import { Drawer, styled } from "@mui/material";

export const NavDrawer = styled(Drawer, [
  {
    shouldForwardProp: true,
  },
])`
  .nav-drawer-paper {
    .logo-text {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-style: Bold;
      font-size: 18px;
      line-height: 100%;
      color: ${({ theme }) => theme.palette.primary.main};
      column-gap: 2px;
      justify-content: center;
    }
    .drawer-close-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      fill: ${({ theme }) => theme.palette["dark-black"]};
      cursor: pointer;
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
