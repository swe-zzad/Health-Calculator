const express = require('express'); 
const path = require('path');
// const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// // Enable CORS for frontend
// app.use(cors({ origin: '*', method: ["GET", "POST" ,"UPDATE"]}));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'stc')));

app.post("/calculate-risk", (req, res) => {
  const riskLevel = "yes";
  res.json({ riskLevel });
});


// Serve index.html for direct access
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`🎲 Dice Roller API running at http://localhost:${PORT}`);
  });