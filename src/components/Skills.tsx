import React from "react";
import { Box, Typography, Chip } from "@mui/material";

import { skills } from "../utils/";

const Skills = () => {
  return (
    <Box mb={1}>
      <Typography
        sx={{ fontFamily: "'Arvo', serif", textDecoration: "underline" }}
        variant="h6"
        mb={1}
      >
        Udvalgte IT kompetencer
      </Typography>

      {skills.map((entry) => (
        <Box m={1} display="inline">
          <Chip label={entry} />
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
