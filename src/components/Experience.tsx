import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { experience } from "../utils/";

const Experience = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{ fontFamily: "'Arvo', serif", textDecoration: "underline" }}
          variant="h6"
        >
          Udvalgte erhvervserfaringer
        </Typography>

        {experience.map((entry) => {
          const { year, title, employer, description } = entry;
          return (
            <Accordion key={description} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{year}</Typography>
                <Box ml={1}>
                  <Typography>
                    <strong>{title}</strong>
                  </Typography>
                  <Typography color="text.secondary">{employer}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{description}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default Experience;
