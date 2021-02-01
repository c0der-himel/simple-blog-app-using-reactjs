const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list my-5">
      <h2 className="mb-5">
        <u>{title}</u>
      </h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview shadow rounded-3 px-5 py-4 my-4"
          key={blog.id}
        >
          <h2>{blog.title}</h2>
          <p>
            Written By: <strong>{blog.author}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
