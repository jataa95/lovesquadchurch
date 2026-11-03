// Plan a Visit content. Replace the placeholders with the real details.
const lorem =
  "Cras aliquet, sem consectetur condimentum ultricies, risus massa condimentum quam, a eleifend dolor elit quis orci.";

export const visit = {
  intro: lorem,
  photo: "/images/visit/visit-hero.jpg",
  inPerson: {
    times: [
      ["SUNDAYS", "9AM"],
      ["WEDNESDAYS", "5:30PM"],
    ],
    address: "53 Rikaz Plaza, Road, Ikeja Lagos",
    mapsUrl: "https://maps.google.com/?q=53+Rikaz+Plaza+Ikeja+Lagos",
    details: lorem,
    children: lorem,
  },
  online: {
    photo: "/images/visit/visit-online.jpg",
    prayers: [["TELEGRAM", "TUESDAYS", "5AM"]],
    loveSpots: [
      ["KETU", "TUESDAYS", "7:30PM"],
      ["IKEJA", "DAY", "5:30PM"],
      ["SOMOLU", "DAY", "5:30PM"],
    ],
    details: lorem,
  },
};
