const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const cors = require("cors");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.use("/user", userRoute);

app.get("*", (req, res) => {
  res.send("this is express server ");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello World');
// });
// server.listen(3000, "localhost", () => {
//     console.log('listening on 3000');
// });
