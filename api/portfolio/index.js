import { portfolios, uuidv4 } from "../../../data/portfolioData";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(portfolios);
      break;

    case "POST":
      const newPortfolio = req.body;
      if (!newPortfolio.title) {
        return res.status(400).json({ message: "Project Title is required" });
      }
      const createdPortfolio = { id: uuidv4(), ...newPortfolio };
      portfolios.push(createdPortfolio);
      res.status(201).json(createdPortfolio);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
