// pages/api/about.js
import { client } from "../../lib/sanity";

export default async function handler(req, res) {
  try {
    const query = `*[_type == "aboutPage"][0]{
      title,
      seo,
      hero,
      mission,
      team{
        heading,
        members[]->{
          _id,
          name,
          role,
          image
        }
      },
      values
    }`;

    const data = await client.fetch(query);

    if (!data) {
      return res.status(404).json({ error: "About page not found" });
    }

    res.status(200).json({ about: data });
  } catch (error) {
    console.error("Error fetching about page:", error);
    res.status(500).json({ error: "Failed to fetch about page" });
  }
}
