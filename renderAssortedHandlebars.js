import fs from "fs";
import Handlebars from "handlebars";

const template = Handlebars.compile(
  fs.readFileSync("dist/assorted/compiled/promotional.html", "utf8")
);

const data = JSON.parse(
  fs.readFileSync("src/assorted/data/promotional.json", "utf-8")
);

const html = template(data);

fs.writeFileSync("dist/assorted/personalised/handlebars-promotional.html", html);
