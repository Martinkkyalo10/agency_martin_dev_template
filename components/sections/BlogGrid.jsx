import BlogCard from "@/components/ui/BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Cloud Infrastructure with AWS",
    excerpt: "Learn how AWS can revolutionize your cloud infrastructure",
    date: "Jan 10, 2025",
    likes: 5,
    comments: 2,
    image: "/img/blog-1.png",
  },
  {
    id: 2,
    title: "Full-Stack Development with React & Node.js",
    excerpt: "Discover how to optimize your web applications",
    date: "Feb 5, 2025",
    likes: 8,
    comments: 4,
    image: "/img/blog-2.png",
  },
];

export default function BlogGrid() {
  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 col-xl-3">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
