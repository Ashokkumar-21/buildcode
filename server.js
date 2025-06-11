const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    name: "Ashokkumar S",
    title: "No-Nonsense Tech Guy",
    summary: "A hands-on tech professional with deep skills in infrastructure, scripting, automation, and issue resolution. Known for getting things done — without fluff.",
    strengths: [
      "Quick problem-solving",
      "Strong technical foundation (Linux, Windows, Networking, Cloud)",
      "Direct communicator and self-reliant",
      "Persistent and resourceful"
    ],
    weaknesses: [
      "Prefers doing over delegating",
      "Less focused on presentation/design",
      "Impatient with unnecessary bureaucracy"
    ],
    skills: ["Linux", "Windows Server", "Shell Scripting", "EC2 / AWS", "Mail Servers", "Access DB", "Excel Automation", "Networking", "NAS/Synology"],
    projects: [
      { name: "Infrastructure Automation", desc: "Automated Linux/Windows deployments using scripts & cloud tools" },
      { name: "Synology NAS Integration", desc: "Used Synology NAS as mail storage backend and PST archival" },
      { name: "Excel to Access Migration", desc: "Migrated large Excel datasets to a collaborative Access DB" }
    ],
    contact: {
      email: "you@example.com",
      location: "India"
    }
  });
});

app.listen(port, () => {
  console.log(`Portfolio running at http://localhost:${port}`);
});