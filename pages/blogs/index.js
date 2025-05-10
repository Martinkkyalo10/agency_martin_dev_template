import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Martin Devs</title>
      </Head>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-5">Martin Devs Blog</h1>
          <p>Stay Updated with Our Latest Insights</p>
        </div>
        <div className="row g-4">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <img
                  src={`/img/blog-${id}.png`}
                  className="card-img-top"
                  alt={`Blog Post ${id}`}
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Post Title {id}</h5>
                  <p className="card-text">
                    Brief description for blog post {id}.
                  </p>
                  <a href="/details" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
