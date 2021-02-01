import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="Not-Found">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 pt-5 mt-5">
            <div className="text-center alert-warning mt-5 p-4 rounded-3 shadow">
              <h1>☠ 404 ☠</h1>
              <h2>Page Not Found</h2>
              <hr />
              <Link className="lead" to="/">
                Back to Home Page . . .
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
