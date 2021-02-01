import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Evan You');
  const [body, setBody] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const blog = { title, author, body };

    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setLoading(false);
      console.log('Blog added');
      history.push('/');
    });
  };

  return (
    <section className="Create">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="create pt-5">
              <div className="create-title my-5 pt-5">
                <h2>
                  <u>Add a new Blog</u>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-6 offset-3">
            <div className="create-content p-5 mb-5 shadow-lg rounded-3">
              <div className="form-title text-center mb-4">
                <h2>Create Blog</h2>
                <hr />
              </div>
              <div className="form-content">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter title . . ."
                      id="title"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="author" className="form-label">
                      Author
                    </label>
                    <select
                      className="form-select"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    >
                      <option value="Facebook">Facebook</option>
                      <option value="IBM">IBM</option>
                      <option value="Evan You">Evan You</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                      Body
                    </label>
                    <textarea
                      id="body"
                      cols="10"
                      rows="5"
                      className="form-control"
                      required
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mt-4 d-grid">
                    {!isLoading && (
                      <button type="submit" className="btn btn-dark py-2">
                        Add Blog
                      </button>
                    )}
                    {isLoading && (
                      <button
                        disabled
                        type="submit"
                        className="btn btn-dark py-2"
                      >
                        Adding Blog . . .
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBlog;
