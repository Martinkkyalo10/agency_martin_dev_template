// pages/api/blogs/[id].js

let blogs = [
  {
    id: "1",
    title:
      "How DevOps Practices Can Transform Your Software Development Process",
    date: "2024-12-15",
    author: "Martin Kyalo",
    likes: 120,
    categories: ["DevOps", "Software Development"],
    content: `In today's fast-paced business world, software development is a critical factor for success...`,
    image: "/img/blog-post-hero.jpg",
    image2: "/img/devops-implementation.jpg",
  },
  {
    id: "2",
    title: "How Cloud Computing Is Revolutionizing Businesses",
    date: "2024-12-01",
    author: "Martin Kyalo",
    likes: 98,
    categories: ["Cloud Solutions"],
    content: `Cloud computing has rapidly become a cornerstone of modern digital transformation...`,
    image: "/img/cloud-computing.jpg",
  },
];

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  const blogIndex = blogs.findIndex((b) => b.id === id);

  if (blogIndex === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  switch (method) {
    case "GET":
      res.status(200).json(blogs[blogIndex]);
      break;

    case "PUT":
      const updatedBlog = req.body;
      if (!updatedBlog.title || !updatedBlog.content) {
        return res
          .status(400)
          .json({ message: "Title and content are required." });
      }
      blogs[blogIndex] = { ...blogs[blogIndex], ...updatedBlog };
      res.status(200).json(blogs[blogIndex]);
      break;

    case "DELETE":
      blogs.splice(blogIndex, 1);
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
