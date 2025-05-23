import { pricingPlans } from "../../../data/pricingPlansData";

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const planIndex = pricingPlans.findIndex((plan) => plan.id === id);

  if (planIndex === -1) {
    return res.status(404).json({ message: "Pricing plan not found" });
  }

  switch (method) {
    case "GET":
      res.status(200).json(pricingPlans[planIndex]);
      break;

    case "PUT":
      const updatedPlan = req.body;
      if (!updatedPlan.name) {
        return res.status(400).json({ message: "Plan name is required" });
      }
      pricingPlans[planIndex] = { ...pricingPlans[planIndex], ...updatedPlan };
      res.status(200).json(pricingPlans[planIndex]);
      break;

    case "DELETE":
      pricingPlans.splice(planIndex, 1);
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
