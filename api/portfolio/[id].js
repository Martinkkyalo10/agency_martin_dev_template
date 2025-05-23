import { portfolios } from "../../../data/portfolioData";

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const portfolioIndex = portfolios.findIndex((p) => p.id === id);

  if (portfolioIndex === -1) {
    return res.status(404).json({ message: "Portfolio not found" });
  }

  switch (method) {
    case "GET":
      res.status(200).json(portfolios[portfolioIndex]);
      break;

    case "PUT":
      const updatedPortfolio = req.body;
      if (!updatedPortfolio.title) {
        return res.status(400).json({ message: "Project Title is required" });
      }
      portfolios[portfolioIndex] = {
        ...portfolios[portfolioIndex],
        ...updatedPortfolio,
      };
      res.status(200).json(portfolios[portfolioIndex]);
      break;

    case "DELETE":
      portfolios.splice(portfolioIndex, 1);
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
