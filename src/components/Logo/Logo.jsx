import { styled, Typography } from "@mui/material";
import React from "react";
import LogoIcon from "../../ui/icons/LogoIcon";
const StyledLogo = styled(Typography)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-style: Bold;
  font-size: 18px;
  line-height: 100%;
  color: ${({ theme }) => theme.palette.primary.main};
  column-gap: 4px;
`;

function Logo(props) {
  const { sx, restProps } = props;
  return (
    <StyledLogo variant="h6" sx={{ my: 2, ...sx }} {...restProps}>
      <LogoIcon />
      Medify
    </StyledLogo>
  );
}

export default Logo;
