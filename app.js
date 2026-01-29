const http = require("http");

const server = http.createServer((req, res) => {
  console.log("New feature added");
  res.end("Welcome to my Node.js app!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

