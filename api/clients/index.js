import { clients, uuidv4 } from "../../../data/clientsData";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(clients);
      break;

    case "POST":
      const newClient = req.body;

      if (!newClient.name) {
        return res.status(400).json({ message: "Client name is required" });
      }

      const createdClient = { id: uuidv4(), ...newClient };
      clients.push(createdClient);
      res.status(201).json(createdClient);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
