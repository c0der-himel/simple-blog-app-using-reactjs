import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, isLoading, errors } = useFetch(
    'http://localhost:5000/blogs'
  );

  return (
    <section className="Home">
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="home my-5 pt-5">
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
              {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
