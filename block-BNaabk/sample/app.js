var require = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hello World !");
});
app.listen(3000, () => {
  console.log("serve listening port on 3k");
});