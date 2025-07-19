import { Stack, styled } from "@mui/material";

export const BottomNavWrapper = styled(Stack)`
  &.bottom-nav-wrapper {
    background: ${({ theme }) => theme.palette["bg-bottom-nav"]};
    justify-content: center;
    align-items: center;
    .bottom-nav {
      align-items: center;
      width: fit-content;
      .bottom-links {
        flex-direction: row;
        padding: 40px 0px 20px 0px;
        justify-content: center;
        column-gap: 10vw;
        @media (max-width: 768px) {
          flex-direction: column;
          row-gap: 2vh;
        }
        .logo-sociallink {
          row-gap: 60%;
          .sociallink {
            gap: 12px;
            .MuiButtonBase-root {
              background: #fff;
              padding: 6px;
              border-width: 1px;
              border-radius: 50%;
              svg {
                width: 18px;
                height: 18px;
                fill: ${({ theme }) => theme.palette.primary.main};
              }
            }
          }
        }
        .local-nav {
          width: fit-content;
          max-height: 45vh;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          row-gap: 10px;
          column-gap: 5vw;
          .MuiButtonBase-root {
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            line-height: 28px;
            vertical-align: middle;
            text-transform: none;
            color: ${({ theme }) => theme.palette.text.primary};
          }
          @media (max-width: 768px) {
            flex-wrap: nowrap;
            max-height: fit-content;
          }
        }
      }
      .nav-copyright {
        width: 100%;
        border-top: 1px solid #ffffff1a;
        padding-top: 30px;
        margin-bottom: 20px;
        @media (max-width: 499px) {
          text-align: center;
        }
      }
    }
  }
`;
