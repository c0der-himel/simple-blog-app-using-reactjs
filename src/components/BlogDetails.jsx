import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, errors } = useFetch(
    `http://localhost:5000/blogs/${id}`
  );

  return (
    <section className="Blog-Details">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="blog-details pt-5">
              <div className="blog-details-title my-5 pt-5">
                <h2>
                  <u>Blog Details</u>
                </h2>
              </div>
              <div className="blog-details-content px-5 pt-4 pb-3 shadow-lg rounded-3">
                {isLoading && (
                  <div>
                    <p className="lead">Loading . . .</p>
                  </div>
                )}
                {errors && (
                  <div className="text-center alert-danger m-5 px-3 pt-3 pb-1 rounded-3 shadow">
                    <p className="lead">{errors}</p>
                  </div>
                )}
                {blog && (
                  <article>
                    <div className="blog-title">
                      <h2>{blog.title}</h2>
                      <p>
                        Written By: <strong>{blog.author}</strong>
                      </p>
                      <hr />
                    </div>
                    <div className="details">
                      <p className="lead">{blog.body}</p>
                    </div>
                  </article>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
