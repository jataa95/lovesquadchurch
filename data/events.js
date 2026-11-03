export const events = {
  title: "NUNC CONDIMENTUM SAPIEN",

  image: "/images/events/event-1.jpg",

  // Placeholder: replace with a short description of the event.
  description:
    "Condimentum ultrices, risus massa condimentum quam, a eleifend dolor elit quis orci. Cras aliquet, sem consectetur condimentum ultrices, risus massa condimentum quam.",

  button: "GO TO EVENTS",
};
// Events page content. Replace the placeholders with real events.
const eventsLorem =
  "Cras aliquet, sem consectetur condimentum ultricies, risus massa condimentum quam, a eleifend dolor elit quis orci.";

export const eventsPage = {
  intro: eventsLorem,
  photo: "/images/events/event-3.jpg",
  featured: {
    label: "NEXT UP",
    title: "Event name",
    date: "Day, 00 Month",
    time: "00:00 AM",
    text: eventsLorem,
    photo: "/images/events/event-2.jpg",
  },
  upcoming: [
    { title: "Event name", date: "00 Month", text: eventsLorem },
    { title: "Event name", date: "00 Month", text: eventsLorem },
    { title: "Event name", date: "00 Month", text: eventsLorem },
  ],
};
