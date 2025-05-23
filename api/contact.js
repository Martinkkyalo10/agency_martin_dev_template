// pages/api/contacts.js
import { client } from "../../lib/sanity";

export default async function handler(req, res) {
  try {
    const query = `*[_type == "contactPage"][0]{
      title,
      seo,
      hero,
      contactForm,
      contactInfo
    }`;
    const data = await client.fetch(query);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching contact page:", error);
    res.status(500).json({ error: "Failed to fetch contact page" });
  }
}
