require("dotenv-flow").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit Server Express");
  });
});
