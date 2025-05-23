// pages/api/case-studies/index.js
import { client } from "../../../lib/sanity";

export default async function handler(req, res) {
  try {
    const query = `*[_type == "caseStudy"] | order(_createdAt desc){
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
    const data = await client.fetch(query);
    res.status(200).json({ caseStudies: data });
  } catch (error) {
    console.error("Error fetching case studies:", error);
    res.status(500).json({ error: "Failed to fetch case studies" });
  }
}
