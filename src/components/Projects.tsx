import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link
} from "@mui/material";
import { projects } from "../utils/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Projects = () => {
  return (
    <Box>
      <Box mb={1}>
        <Typography
          sx={{ fontFamily: "'Arvo', serif", textDecoration: "underline" }}
          variant="h6"
        >
          Projects
        </Typography>
        {Object.values(projects).map((entry) => {
          const { title, url, description } = entry;
          return (
            <Accordion key={description} elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <strong>{title}</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{description}</Typography>
                <Link
                  component="a"
                  color="text.secondary"
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer"
                  }}
                  target="_blank"
                  key={url}
                  href={url}
                >
                  Link to: <strong>{title}</strong>
                </Link>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
