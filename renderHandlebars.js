import fs from "fs";
import Handlebars from "handlebars";

// const template = Handlebars.compile(
//   fs.readFileSync("dist/promotional.html", "utf8")
// );

// const data = JSON.parse(
//   fs.readFileSync("src/data/promotional.json", "utf-8")
// );

// const html = template(data);

// fs.writeFileSync("dist/handlebars-promotional.html", html);

const template = Handlebars.compile(
  fs.readFileSync("src/ecommerce/dist/order-confirmation.html", "utf8")
);

const customer = JSON.parse(
  fs.readFileSync("src/ecommerce/data/customer.json", "utf8")
);

const products = JSON.parse(
  fs.readFileSync("src/ecommerce/data/products.json", "utf8")
);

const emailConfig = JSON.parse(
  fs.readFileSync("src/ecommerce/data/email-config.json", "utf8")
);

const cart = JSON.parse(
  fs.readFileSync("src/ecommerce/data/cart.json", "utf8")
);

const order = JSON.parse(
  fs.readFileSync("src/ecommerce/data/order.json", "utf8")
);

const data = {
  customer,
  products,
  emailConfig,
  cart,
  order
};

const html = template(data);

fs.writeFileSync("src/ecommerce/dist/handlebars-order-confirmation.html", html);
