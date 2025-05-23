import { featuresPages } from "../../../data/featuresPageData";

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const index = featuresPages.findIndex((page) => page.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Features Page not found" });
  }

  switch (method) {
    case "GET":
      res.status(200).json(featuresPages[index]);
      break;

    case "PUT":
      const updatedPage = req.body;
      if (!updatedPage.title) {
        return res.status(400).json({ message: "Page Title is required" });
      }
      featuresPages[index] = { ...featuresPages[index], ...updatedPage };
      res.status(200).json(featuresPages[index]);
      break;

    case "DELETE":
      featuresPages.splice(index, 1);
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
