const express = require("express");
const app = express();
const cors = require('cors')

if (process.env.NODE_ENV === "development") {
  app.use(cors());
}


app.use(express.static("build"));
app.get("/api", (request, response) => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber, new Date())
  response.json({
    number: randomNumber
  })
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
