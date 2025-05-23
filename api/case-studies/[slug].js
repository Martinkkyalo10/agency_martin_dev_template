// pages/api/case-studies/[slug].js
import { client } from "../../../lib/sanity";

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const query = `*[_type == "caseStudy" && slug.current == $slug][0]{
      clientName,
      slug,
      projectTitle,
      challenge,
      solution,
      results,
      coverImage,
      projectLink,
      technologies,
      content
    }`;
    const data = await client.fetch(query, { slug });

    if (!data) {
      return res.status(404).json({ error: "Case study not found" });
    }

    res.status(200).json({ caseStudy: data });
  } catch (error) {
    console.error("Error fetching case study:", error);
    res.status(500).json({ error: "Failed to fetch case study" });
  }
}
