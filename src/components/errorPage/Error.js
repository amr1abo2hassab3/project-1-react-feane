import { Link } from "react-router-dom";
import "./error.css";
import errorImg from "../../media/download.png"

const ErrorPage = () => {
  return (
    <div className="secError">
      <h1>Error 404</h1>
      <h4>File not found</h4>
      <p>
        The site configured at this address does not contain the requested file.
      </p>
      <p>
        If this is your site, make sure that the filename case matches the URL
        as well as any file permissions.
      </p>
      <p>
        <Link to="https://help.github.com/pages/">
          Read the full documentation
        </Link>
        for more information about using GitHub Pages.
      </p>

      <div id="suggestions">
        <Link to="https://githubstatus.com">GitHub Status</Link> —
        <Link to="https://twitter.com/githubstatus">@githubstatus</Link>
      </div>
      <p>
        <img src={errorImg} />
      </p>

      <button className="">
        <Link to="/">Back To Home Page</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
