const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like styles.css) from the current directory
app.use(express.static(path.join(__dirname)));

// Set EJS as view engine and look for views in the current directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

app.get('/', (req, res) => {
  res.render('index', {
    name: "ASHOKKUMAR S",
    title: "DevOps Engineer",
    summary: "A Hands-On DevOps professional with deep skills in infrastructure, scripting, automation, and issue resolution. Known for getting things done — without fluff.",
    strengths: [
      "Quick Problem-Solving",
      "Strong Technical Foundation (AWS, Linux, Windows, Networking, Cloud, GitHub, Docker, Jet, Kubernetes, Jenkins, Terraform)",
      "Direct Communicator & Self-Reliant",
      "Persistent & Resourceful"
    ],
    weaknesses: [
      "Prefers Doing over Delegating",
      "Less Focused on Presentation/design",
      "Impatient with Unnecessary Bureaucracy"
    ],
    skills: ["Linux", "Windows Server", "Shell Scripting", "EC2 / AWS", "Mail Servers", "Access DB", "Excel Automation", "Networking", "NAS/Synology"],
    projects: [
      { name: "Infrastructure Automation", desc: "Automated Linux/Windows Deployments Using Scripts & Cloud Tools" },
      { name: "Synology NAS Integration", desc: "Used Synology NAS as Mail Storage Backend & PST Archival" },
      { name: "Excel to Access Migration", desc: "Migrated Large Excel Datasets to a Collaborative Access DB" }
    ],
    contact: {
      email: "ashoksulthan21@gmail.com",
      location: "India"
    }
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio running at http://0.0.0.0:${port}`);
});
