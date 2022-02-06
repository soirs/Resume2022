import React from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { education } from "../utils/";

const Education = () => {
    return (
        <Box>
            <Box>
                <Typography
                    sx={{ fontFamily: "'Arvo', serif", textDecoration: "underline" }}
                    variant="h6"
                >
                    Uddannelse
                </Typography>

                {education.map((entry) => {
                    const { year, education, school } = entry;
                    return (
                        <Accordion key={year} elevation={0}>
                            <AccordionSummary>
                                <Typography>{year}</Typography>
                                <Box ml={1}>
                                    <Typography>
                                        <strong>{education}</strong>
                                    </Typography>
                                    <Typography color="text.secondary">{school}</Typography>
                                </Box>
                            </AccordionSummary>
                        </Accordion>
                    );
                })}
            </Box>
        </Box>
    );
};

export default Education;
