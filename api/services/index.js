import servicesPage from "../../../data/servicesPageData";

let currentServicesPage = { ...servicesPage }; // clone initial data

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(currentServicesPage);
      break;

    case "POST":
      const newPage = req.body;
      if (!newPage.title) {
        return res.status(400).json({ message: "Title is required." });
      }
      // In a real DB, you'd create a new document
      currentServicesPage = { id: "1", ...newPage };
      res.status(201).json(currentServicesPage);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
