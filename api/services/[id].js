import servicesPage from "../../../data/servicesPageData";

let currentServicesPage = { ...servicesPage };

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (id !== "1") {
    return res.status(404).json({ message: "Services page not found" });
  }

  switch (method) {
    case "GET":
      if (!currentServicesPage) {
        return res.status(404).json({ message: "Services page not found" });
      }
      res.status(200).json(currentServicesPage);
      break;

    case "PUT":
      const updatedPage = req.body;
      if (!updatedPage.title) {
        return res.status(400).json({ message: "Title is required." });
      }
      currentServicesPage = { ...currentServicesPage, ...updatedPage };
      res.status(200).json(currentServicesPage);
      break;

    case "DELETE":
      currentServicesPage = null;
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
