import { Grid, styled } from "@mui/material";

export const AppDownloadWrapper = styled(Grid)`
  padding-top: 35px;
  background: linear-gradient(
    81deg,
    #e7f0ff 9.01%,
    rgba(232, 241, 255, 0.47) 89.11%
  );
  .left-pannel {
    padding-left: 32px;
    @media (max-width: 900px) {
      padding: 0px 32px;
    }
    .app-download-img {
      width: 100%;
      height: 100%;
    }
  }
  .right-pannel {
    @media (max-width: 900px) {
      padding: 0px 32px;
    }
    .MuiStack-root:not(.app-download-input) {
      width: 100%;
      height: 100%;
      row-gap: 21px;
      .right-pannel-text {
        font-weight: 600;
        font-style: SemiBold;
        font-size: 48px;
        line-height: 67px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: ${({ theme }) => theme.palette["bg-bottom-nav"]};
        span {
          color: ${({ theme }) => theme.palette.primary.main};
        }
        @media (max-width: 499px) {
          font-size: 32px;
          line-height: 34px;
        }
      }
      .app-download-input {
        column-gap: 20px;
        .MuiFormControl-root {
          .MuiInputAdornment-root {
            border-right-width: 1px;
            border-right: 1px solid #b4b4be4d;
            margin-right: 0px;
            padding: 21.5px 12px;
            border-radius: 4px;
            border-bottom-right-radius: 0px;
            border-top-right-radius: 0px;
            background: ${({ theme }) => theme.palette.text.primary};
            /* border: 1px solid;
          border-color: #e0e3e7; */
            :not(.MuiInputAdornment-hiddenLabel) {
              margin-top: 0px;
            }
          }
          .MuiInputBase-root {
            color: ${({ theme }) => theme.palette.text.secondary};
          }
          @media (max-width: 900px) {
            width: 100%;
          }
        }
        .MuiButtonBase-root {
          width: 121px;
          height: 43px;
          border-radius: 8px;
          color: ${({ theme }) => theme.palette.text.primary};
          text-transform: none;
          @media (max-width: 900px) {
            width: 100%;
          }
        }
        @media (max-width: 900px) {
          flex-direction: column;
          row-gap: 30px;
        }
      }
      .app-download-btn {
        margin-top: 20px;
        margin-left: -4px;
        margin-bottom: 40px;
        gap: 14px;
        .MuiButtonBase-root {
          height: 50px;
          width: 160px;
          color: ${({ theme }) => theme.palette.text.primary};
          background: ${({ theme }) => theme.palette["dark-black"]};
          border-radius: 8px;
          border: none;
          padding: 10px 15px;
          @media (max-width: 901px) {
            width: 100%;
          }
        }
        @media (max-width: 901px) {
          flex-direction: column;
        }
      }
    }
  }
`;
