import { Box, styled } from "@mui/material";

export const AccordionWrapper = styled(Box)`
  .MuiAccordion-root {
    &::before {
      display: none;
    }
    &:not(:last-child) {
      margin-bottom: 24;
    }
    .MuiAccordionSummary-root {
      background-color: false;
      margin-bottom: 24px;
      &.MuiAccordionSummary-expandIconWrapper.Mui-expanded {
        transform: rotate(45deg);
      }
      &.MuiAccordionSummary-content {
        margin-left: 0;
      }
      padding: 0;
    }
    .MuiAccordionDetails-root {
      padding: 0;
    }
  }
`;
