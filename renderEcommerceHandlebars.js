import fs from "fs";
import Handlebars from "handlebars";

const template = Handlebars.compile(
  fs.readFileSync("dist/ecommerce/compiled/promotions/sale-email.html", "utf8")
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

const recommendations = JSON.parse(
  fs.readFileSync("src/ecommerce/data/recommendations.json", "utf8")
);

const promotion = JSON.parse(
  fs.readFileSync("src/ecommerce/data/promotion.json", "utf8")
);

const data = {
  customer,
  products,
  emailConfig,
  cart,
  order,
  recommendations,
  promotion
};

const html = template(data);

fs.writeFileSync("dist/ecommerce/personalised/promotions/handlebars-sale-email.html", html);
