const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "..")));

// 홈 페이지
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// About 페이지
app.get("/main", (req, res) => {
  res.sendFile(path.join(__dirname, "../main.html"));
});

// Contact 페이지
app.get("/over", (req, res) => {
  res.sendFile(path.join(__dirname, "../over.html"));
});

app.get("/perfect", (req, res) => {
  res.sendFile(path.join(__dirname, "../perfect.html"));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
