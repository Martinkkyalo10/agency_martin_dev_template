import { categories, uuidv4 } from "../../../data/categoriesData";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(categories);
      break;

    case "POST":
      const newCategory = req.body;

      if (!newCategory.title) {
        return res.status(400).json({ message: "Title is required" });
      }

      const createdCategory = { id: uuidv4(), ...newCategory };
      categories.push(createdCategory);
      res.status(201).json(createdCategory);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
