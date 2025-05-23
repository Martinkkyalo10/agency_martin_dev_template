import { featuresPages, uuidv4 } from "../../../data/featuresPageData";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(featuresPages);
      break;

    case "POST":
      const newPage = req.body;
      if (!newPage.title) {
        return res.status(400).json({ message: "Page Title is required" });
      }
      const createdPage = { id: uuidv4(), ...newPage };
      featuresPages.push(createdPage);
      res.status(201).json(createdPage);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
