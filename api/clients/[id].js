import { clients } from "../../../data/clientsData";

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const index = clients.findIndex((client) => client.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Client not found" });
  }

  switch (method) {
    case "GET":
      res.status(200).json(clients[index]);
      break;

    case "PUT":
      const updatedClient = req.body;

      if (!updatedClient.name) {
        return res.status(400).json({ message: "Client name is required" });
      }

      clients[index] = { ...clients[index], ...updatedClient };
      res.status(200).json(clients[index]);
      break;

    case "DELETE":
      clients.splice(index, 1);
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
