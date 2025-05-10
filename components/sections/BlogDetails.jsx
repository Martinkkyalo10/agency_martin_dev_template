import Image from "next/image";

export default function BlogDetails({ slug }) {
  // In a real app, you would fetch this data based on the slug
  const post = {
    title:
      "How DevOps Practices Can Transform Your Software Development Process",
    author: "Martin Kyalo",
    date: "Dec 15, 2024",
    likes: 120,
    content: `
      <p>In today's fast-paced business world, software development is a critical factor for success...</p>
      <h2>Understanding DevOps</h2>
      <p>DevOps is more than just a set of tools or technologies...</p>
    `,
    image: "/img/devops-implementation.jpg",
  };

  return (
    <>
      <div className="blog-post-header mb-5">
        <h1 className="display-4">{post.title}</h1>
        <div className="d-flex justify-content-between mb-3">
          <span className="text-muted">
            By {post.author} | {post.date}
          </span>
          <span>
            <i className="fas fa-heart text-danger"></i> {post.likes} Likes
          </span>
        </div>
        <Image
          src={post.image}
          className="img-fluid w-100 rounded"
          alt={post.title}
          width={800}
          height={450}
        />
      </div>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="d-flex justify-content-between mt-5">
        <span>Share this post: </span>
        <div className="social-icons">
          <a href="#" className="btn btn-primary rounded-circle me-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="btn btn-primary rounded-circle me-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="btn btn-primary rounded-circle me-2">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </>
  );
}
