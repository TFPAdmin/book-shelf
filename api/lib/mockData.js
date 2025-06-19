// Mock data for when database connection is unavailable
export const mockBooks = [
  {
    id: 1,
    title: "Untitled",
    series: "Freeing Allieria",
    position: "Book 1",
    author: "C. B. Reed",
    description:
      "On his 13th birthday Damien received some world shattering news. Now, a year later, he is ready to embrace his new identity and do what needs to be done.",
    image_url: "/images/books/under-construction.jpg",
    genre: "Fantasy",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
   title: "Untitled",
   series: "Freeing Allieria",
   position: "Book 2",
   author: "C. B. Reed",
   description:
      "Set after Book 1.",
    image_url: "/images/books/under-construction.jpg",
    genre: "Fantasy",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
