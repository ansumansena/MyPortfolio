import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Skill data
const skills = [
  { name: "C/C++", level: 95 },
  { name: "Java", level: 95 },
  { name: "SQL", level: 90 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 90 },
  { name: "MongoDB", level: 90 },
  { name: "AWS Amplify", level: 85 },
];

const sections = [
  {
    title: "About Me",
    content: (
      <Typography variant="body1">
        I'm a passionate web developer with experience in creating dynamic web applications. 
        I specialize in React and have worked with various frameworks and technologies.
      </Typography>
    ),
  },
  {
    title: "Education",
    content: (
      <List>
        <ListItem>
          <ListItemText
            primary="Odisha University of Technology and Research"
            secondary="B.Tech in Information Technology (2020 - 2024), CGPA: 9.23"
          />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Experience",
    content: (
      <List>
        <ListItem>
          <ListItemText
            primary={
              <>
                Web Developer Intern at Meliorist Developers{" "}
                <Typography
                  variant="body2"
                  component="span"
                  style={{ fontSize: "0.8rem", color: "gray" }}
                >
                  (APRIL 2023 - JULY 2023)
                </Typography>
              </>
            }
            secondary={
              <>
                <ul>
                  <li>
                    Responsible for development and maintenance of the website
                    and ERP platform of{" "}
                    <a href="https://youstad.com" target="_blank" rel="noopener noreferrer">
                      Youstad
                    </a>
                    .
                  </li>
                  <li>
                    Utilized React framework for developing and Material UI for
                    styling the platform websites.
                  </li>
                  <li>
                    Integrated APIs and authentication using AWS Amplify
                    libraries and implemented state management using React
                    hooks.
                  </li>
                  <li>Developed and maintained the website and ERP platform.</li>
                </ul>
              </>
            }
          />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Projects",
    content: (
      <List>
        <ListItem>
          <ListItemText
            primary={
              <a
                href="https://github.com/ansumansena/Ecommerce-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ecommerce-App
              </a>
            }
            secondary={
              <>
                <ul>
                  <li>A full stack ecommerce app was made with React.js for frontend.</li>
                  <li>Material UI was used for UI design.</li>
                  <li>REST API was created using Node.js and MongoDB.</li>
                  <li>For data security, JWT was implemented.</li>
                  <li>
                    Incorporated the Stripe API to facilitate secure and seamless
                    payment processing, enhancing the platform's credibility and
                    user-friendliness.
                  </li>
                  <li>Leveraged Redux for efficient data management.</li>
                </ul>
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <a
                href="https://vibechatapp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Realtime Chat App
              </a>
            }
            secondary={
              <>
                <ul>
                  <li>A realtime chat application made with React.js, Sass, and HTML for frontend.</li>
                  <li>Firebase was used for authentication and as a realtime database.</li>
                  <li>
                    Employed the power of Redux for meticulous state management,
                    enabling real-time data updates and maintenance throughout
                    the app.
                  </li>
                </ul>
              </>
            }
          />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Skills",
    content: (
      <Box sx={{ marginTop: "10px" }}>
        {skills.map((skill) => (
          <Box key={skill.name} marginBottom={2}>
            <Typography variant="body2">{skill.name}</Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              className="linear-progress"
            />
          </Box>
        ))}
      </Box>
    ),
  },
  {
    title: "Certifications",
    content: (
      <List>
        <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <ListItemText
            primary={
              <a
                href="https://smartinternz.com/internships/salesforce_certificates/24ee89e653e6e5cf2cd38b38353a9da2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Salesforce Developer Virtual Internship
              </a>
            }
          />
          <ListItemText
            primary={
              <a
                href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTA5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfMzE5ODc2N18xNjQyOTUzNTcyLnBuZyIsInVzZXJuYW1lIjoiQW5zdW1hbiBTZW5hcGF0aSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction to C++
              </a>
            }
          />
          <ListItemText primary="Certificate of appreciation for completing Cloud Engineering & Machine Learning Track in 30 days of Google Cloud Program" />
          <ListItemText primary="Learning Java" />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Languages",
    content: (
      <List>
        <ListItem>
          <ListItemText primary="English, Hindi, Odia" />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Achievement",
    content: (
      <List>
        <ListItem>
          <ListItemText primary="OUTR Merit Scholarship" />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Interests",
    content: (
      <List>
        <ListItem>
          <ListItemText primary="Cricket, Chess, Music" />
        </ListItem>
      </List>
    ),
  },
];

const App = () => {
  return (
    <Container>
      <AppBar position="static" className="AppBar">
        <Toolbar>
          <Typography variant="h6">My Portfolio</Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box textAlign="center" marginTop={4} marginBottom={4}>
        <motion.h3 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Welcome to My Portfolio!
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          I'm Ansuman Senapati
        </motion.p>
      </Box>

      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper elevation={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">{section.title}</Typography>
                    {section.content}
                  </CardContent>
                </Card>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <footer>
        <Typography variant="h6" style={{ margin: "20px 0 15px 0" }}>Contact</Typography>
        <div className="footer-links">
          <a href="mailto:ansumansenapati10@gmail.com" style={{ marginRight: "20px" }}>
            <EmailIcon style={{ fontSize: 40 }} />
          </a>
          <a href="https://github.com/ansumansena" target="_blank" rel="noopener noreferrer" style={{ marginRight: "20px" }}>
            <GitHubIcon style={{ fontSize: 40, color: "#333" }} />
          </a>
          <a href="https://www.linkedin.com/in/ansuman-senapati-1a4aa9202/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ fontSize: 40, color: "#0077b5" }} />
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default App;
