import React from "react";
import { FooterWrapper } from "../../styles/StyledComponent/FooterWrapper";

import BottomNav from "../../components/BottomNav/BottomNav";
import AppDownload from "../../components/AppDownload/AppDownload";
import Faq from "../../components/Faq/Faq";
import { useLocation } from "react-router";

function Footer() {
  const { pathname } = useLocation();
  return (
    <FooterWrapper>
      {pathname !== "/my-bookings" && <Faq />}
      <AppDownload />
      <BottomNav />
    </FooterWrapper>
  );
}

export default Footer;
