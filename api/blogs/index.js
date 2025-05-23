// pages/api/blogs/index.js

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
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(blogs);
      break;

    case "POST":
      const newBlog = req.body;
      if (!newBlog.title || !newBlog.content) {
        return res
          .status(400)
          .json({ message: "Title and content are required." });
      }

      newBlog.id = (blogs.length + 1).toString();
      newBlog.date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
      newBlog.likes = 0; // default likes count
      blogs.push(newBlog);

      res.status(201).json(newBlog);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
