import React from "react";
import { Link, Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { headerText } from "../utils/";

const ContactInfo = () => (
  <Box textAlign="center" pb={1}>
    {Object.values(headerText.contact).map((entry, index) => {
      const { href, text, prefix } = entry;

      return (
        <Link
          component="a"
          color="text.secondary"
          sx={{
            textDecoration: "none",
            cursor: "pointer"
          }}
          mx={1}
          key={text}
          href={`${prefix}${href}`}
        >
          {entry.text}
        </Link>
      );
    })}
  </Box>
);

const Header = () => {
  return (
    <Box>
      <Box py={1} sx={{ bgcolor: blueGrey[100] }}>
        <Box>
          <Typography
            align="center"
            sx={{ fontFamily: "'Arvo', serif" }}
            variant="h4"
          >
            {headerText.fullName}
          </Typography>
          <Typography
            align="center"
            gutterBottom
            sx={{ fontFamily: "'Arvo', serif" }}
            variant="h6"
          >
            {headerText.title}
          </Typography>
        </Box>
        <ContactInfo />
      </Box>
    </Box>
  );
};

export default Header;
