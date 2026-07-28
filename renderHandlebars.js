import fs from "fs";
import Handlebars from "handlebars";

const template = Handlebars.compile(
  fs.readFileSync("dist/newsletter.html", "utf8")
);

const data = JSON.parse(
  fs.readFileSync("src/data/newsletter.json", "utf-8")
);

const html = template(data);

fs.writeFileSync("dist/handlebars-newsletter.html", html);


// transactional email
// const html = template({
//   guestName: "Andrew",
//   bookingDay: "Friday",
//   bookingTime: "7:00 PM",
//   bookingSeats: 2,
//   updateBookingUrl: "https://elixir-restaurant.com/update"
// });

// forgotpassword email
// const html = template({
//   firstName: "Andrew",
//   lastName: "Travis",
//   resetPasswordUrl: "https://streamy.com/resetpassword",
//   supportUrl: "https://streamy.com/support",
//   userEmail: "hello@andrew.co.uk"
// });

// orderconfirmation email
// const html = template({
//   firstName: "Andrew",
//   lastName: "Travis",
//   orderNumber: "65005000",
//   orderDate: "July 18, 2026",
//   streetAddress: "20 Park Lane",
//   cityAddress: "Manchester",
//   postCode: "M12 4TY",
//   countryAddress: "United Kingdom",
//   contactNumber: "+447546687752",
//   userEmail: "andrew@email.com",
//   orderStatus: "https://www.totallynotsquatch.com/orderstatus/65005000",
//   smsSignup: "https://www.totallynotsquatch.com/sms-signup",
//   termsOfService: "https://www.totallynotsquatch.com/tos",
//   privacyPolicy: "https://www.totallynotsquatch.com/privacy",
//   favouriteItem1Url: "https://www.totallynotsquatch.com/product/toothpaste",
//   favouriteItem2Url: "https://www.totallynotsquatch.com/product/bayrum",
//   favouriteItem3Url: "https://www.totallynotsquatch.com/product/refreshing-hair-kit",
//   favouriteItem4Url: "https://www.totallynotsquatch.com/product/pine-tar-deodorant",
//   careSquadUrl: "https://www.totallynotsquatch.com/support",
//   socialFacebook: "https://www.facebook/com/totallynotsquatch",
//   socialTwitter: "https://www.twitter.com/totallynotsquatch",
//   socialInstagram: "https://www.instagramcom/totallynotsquatch",
//   socialYoutube: "https://www.youtube.com/totallynotsquatch"
// });

// account activation email
// const html = template({
//   currentDate: "July 12, 2026",
//   contactForm: "https://www.theoytrust.org/support-ticket",
//   confirmEmail: "https://www.theoytrust.org/confirm-email-123-321-43",
//   baseUrl: "https://www.theoytrust.org/",
//   managePreferences: "https://www.theoytrust.org/settings/email",
//   optOut: "https://www.theoytrust.org/settings/email/optout",
//   emailSignup: "https://www.theoytrust.org/emailsignup",
//   viewOnline: "https://www.theoytrust.org/email/viewonline",
//   userEmail: "andrew@email.com"
// });

// newsletter email
// const html = template({
//   article1: "https://www.bloompoint.com/article/1",
//   article2: "https://www.bloompoint.com/article/2",
//   article3: "https://www.bloompoint.com/article/3",
//   article4: "https://www.bloompoint.com/article/4",
//   article5: "https://www.bloompoint.com/article/5",
//   newsletterSignup: "https://www.bloompoint.com/newsletter/signup",
//   bloompointSubscribe: "https://www.bloompoint.com/subscription/signup",
//   socialX: "https://www.x.com/bloompoint",
//   socialLinkedin: "https://www.linkedin.com/bloompoint",
//   socialInstagram: "https://www.instagra.com/bloompoint",
//   socialMedium: "https://www.medium.com/bloompoint",
//   socialFacebook: "https://www.facebook.com/bloompoint",
//   socialYoutube: "https://www.youtube.com/bloompoint",
//   appStoreUrl: "https://apps.apple.com/gb/app/bloompoint/1234",
//   googlePlayUrl: "https://play.google.com/store/apps/details?id=com.bloompoint.android&hl=en_GB",
//   contactUrl: "https://www.bloompoint.com/contactus",
//   advertiseUrl: "https://www.bloompoint.com/advertise",
//   emailUnsubscribe: "https://www.bloompoint.com/email/unsubscribe",
//   privacyPolicy: "https://www.bloompoint.com/privacypolicy"
// });

