import fs from "fs";
import Handlebars from "handlebars";

const template = Handlebars.compile(
  fs.readFileSync("dist/orderconfirmation.html", "utf8")
);

const data = JSON.parse(
  fs.readFileSync("src/data/orderconfirmation.json", "utf-8")
);

const html = template(data);

fs.writeFileSync("dist/handlebars-orderconfirmation.html", html);
