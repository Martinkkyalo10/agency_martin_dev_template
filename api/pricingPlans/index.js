import { pricingPlans, uuidv4 } from "../../../data/pricingPlansData";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(pricingPlans);
      break;

    case "POST":
      const newPlan = req.body;
      if (!newPlan.name) {
        return res.status(400).json({ message: "Plan name is required" });
      }
      const createdPlan = { id: uuidv4(), ...newPlan };
      pricingPlans.push(createdPlan);
      res.status(201).json(createdPlan);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
