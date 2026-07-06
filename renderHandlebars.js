import fs from "fs";
import Handlebars from "handlebars";

const template = Handlebars.compile(
  fs.readFileSync("dist/transactional.html", "utf8")
);

// transactional email
const html = template({
  guestName: "Andrew",
  bookingDay: "Friday",
  bookingTime: "7:00 PM",
  bookingSeats: 2,
  updateBookingUrl: "https://elixir-restaurant.com/update"
});

fs.writeFileSync("dist/handlebars-transactional.html", html);
