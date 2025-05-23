import { categories } from "../../../data/categoriesData";

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const index = categories.findIndex((cat) => cat.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Category not found" });
  }

  switch (method) {
    case "GET":
      res.status(200).json(categories[index]);
      break;

    case "PUT":
      const updatedCategory = req.body;

      if (!updatedCategory.title) {
        return res.status(400).json({ message: "Title is required" });
      }

      categories[index] = { ...categories[index], ...updatedCategory };
      res.status(200).json(categories[index]);
      break;

    case "DELETE":
      categories.splice(index, 1);
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
