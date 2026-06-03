const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.get("/", (req, res) => {
  res.send("Insight.IO Robotics Asset Server is Online!");
});

app.listen(PORT, () => {
  console.log(`🚀 Robotics Asset Server running at http://localhost:${PORT}`);
  console.log(
    `Test your video feed: http://localhost:${PORT}/assets/sample_video.mp4`,
  );
  console.log(
    `Test your 3D map: http://localhost:${PORT}/assets/sample_map.pcd`,
  );
});
