import BlogDetails from "@/components/sections/BlogDetails";
import BlogSidebar from "@/components/sections/BlogSidebar";

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <BlogDetails slug={slug} />
        </div>
        <div className="col-lg-4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
