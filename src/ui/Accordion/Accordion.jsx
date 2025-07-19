import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { AccordionWrapper } from "../../styles/StyledComponent/AccordionWrapper";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function CustomAccordion({ data }) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <AccordionWrapper>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          disableGutters
          elevation={0}
          square
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
            expandIcon={<AddIcon sx={{ color: "primary.main" }} />}
          >
            <Typography
              fontSize={18}
              fontWeight={700}
              color="#1B3C74"
              lineHeight={1.2}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="test-AccordionDetails">
            <Typography color="bg-bottom-nav" fontSize={14}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionWrapper>
  );
}

export default CustomAccordion;
