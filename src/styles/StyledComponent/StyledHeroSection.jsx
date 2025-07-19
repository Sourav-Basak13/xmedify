import { Stack, styled } from "@mui/material";

export const StyledHeroSection = styled(Stack)`
  padding: 0px 34px;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  .left-pannel {
    row-gap: 15px;
    .hero-text {
      font-weight: 500;
      font-style: Medium;
      font-size: 31px;
      line-height: 68px;
      color: ${({ theme }) => theme.palette.text.secondary};
      @media (max-width: 599px) {
        font-size: 20px;
        line-height: 34px;
      }
      .hero-subtext {
        display: inline-block;
        width: 100%;
        font-weight: 700;
        font-style: Bold;
        font-size: 56px;
        line-height: 68px;
        .hero-colored-subtext {
          color: ${({ theme }) => theme.palette.primary.main};
        }
        @media (max-width: 599px) {
          font-size: 28px;
          line-height: 34px;
        }
      }
    }
    .hero-desc-text {
      font-weight: 400;
      font-style: Regular;
      font-size: 20px;
      line-height: 32px;
      color: ${({ theme }) => theme.palette["desc-text"]};
      @media (max-width: 599px) {
        font-size: 14px;
        line-height: 16px;
      }
    }
    .hero-btn {
      width: 180px;
      margin-top: 18px;
      font-weight: 500;
      font-style: Medium;
      font-size: 16px;
      text-transform: none;
      color: #ffffff;
      border-radius: 8px;
      padding: 12px 36px;
      @media (max-width: 600px) {
        width: 140px;
        font-size: 12px;
        padding: 8px 24px;
      }
    }
  }
  .right-pannel {
    width: 95%;
    height: 95%;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;
