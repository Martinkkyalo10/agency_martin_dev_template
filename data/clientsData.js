// data/clientsData.js
import { v4 as uuidv4 } from "uuid";

let clients = [
  {
    id: "1",
    name: "Example Client",
    logo: {
      asset: {
        _ref: "image-abc123-800x600-png",
        _type: "reference",
      },
      alt: "Client Logo",
    },
    website: "https://example.com",
    category: "startup",
  },
];

export { clients, uuidv4 };
