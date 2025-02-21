import React from "react";
import { Container, Typography, Box, Button, Card, CardContent, List, ListItem, ListItemText, Grid } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "./Images/Dnyanesh.jpeg";

function App() {
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{
        display: "flex", flexDirection: { xs: "column", md: "row" },
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #1e3c72 30%, #2a5298 90%)", color: "white",
        p: 4, borderRadius: 3, boxShadow: 3
      }}>
        <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>Dnyanesh Patil</Typography>
          <Typography variant="h6" sx={{ fontStyle: "italic" }}>Java Developer | Spring Boot | React.js | PostgreSQL</Typography>
        </Box>
        <Box sx={{ borderRadius: "50%", overflow: "hidden", width: { xs: "120px", md: "150px" }, height: { xs: "120px", md: "150px" }, boxShadow: 3, mt: { xs: 3, md: 0 } }}>
          <img src={profileImage} alt="Dnyanesh Patil" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
      </Box>

      {/* About Me Section */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>About Me</Typography>
          <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.7 }}>
            With 2.5+ years of experience in Java 8, Spring Boot, React.js, and Microservices, I specialize in REST API development, PostgreSQL database management, and Agile methodologies.
          </Typography>
        </Box>
      </motion.div>

      {/* Skills Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Skills</Typography>
        <Grid container spacing={2}>
          {["Java 8", "Spring Boot", "React.js", "Microservices", "PostgreSQL", "MySQL", "Git", "JIRA", "REST APIs"].map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Card sx={{ p: 2, textAlign: "center", boxShadow: 3, borderRadius: 2 }}>{skill}</Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Experience</Typography>
        <List>
          {["Software Engineer at AH Infotech (May 2024 – Present)",
            "Software Engineer at Asiaa Data Pvt Ltd (Feb 2023 – May 2024)",
            "Software Engineer at Newgen Software Technologies (Feb 2022 – Jan 2023)"].map((job, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <ListItem><ListItemText primary={job} /></ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      {/* Projects Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Projects</Typography>
        <Grid container spacing={2}>
          {[{ name: "AH Workwave", description: "Workforce Management System" },
            { name: "E-Healthcare Management App", description: "Healthcare System" },
            { name: "Vehicle Loan Orientation", description: "Banking Domain" }].map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card sx={{ mt: 2, boxShadow: 3, borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>{project.name}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{project.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Education Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Education</Typography>
        <List>
          {["Bachelor of Engineering, Savitribai Phule Pune University (2022) - CGPA: 8.84",
            "HSC (2018) - 82.00%",
            "SSC (2016) - 91.20%"].map((edu, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <ListItem><ListItemText primary={edu} /></ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      {/* Contact Section */}
      <Box sx={{
        textAlign: "center", mt: 4, p: 3, background: "#1e3c72",
        color: "white", borderRadius: 3
      }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Contact</Typography>
        <Typography sx={{ mb: 1 }}>Email: dnyaneshpatil556@gmail.com</Typography>
        <Typography sx={{ mb: 2 }}>Phone: 9823566785</Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => window.open("mailto:dnyaneshpatil556@gmail.com")}>Contact Me</Button>
      </Box>
    </Container>
  );
}

export default App;
