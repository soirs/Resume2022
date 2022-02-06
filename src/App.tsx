import "./styles.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

import { Box, Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <Header />
        <Box mt={1}>
          <Skills />
          <Projects />
          <Experience />
          <Education />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
