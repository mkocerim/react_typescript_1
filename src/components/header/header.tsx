import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Typescript Project</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            className="me-3 py-2 text-dark text-decoration-none"
            to="counter"
          >
            Counter
          </Link>
          <Link
            className="me-3 py-2 text-dark text-decoration-none"
            to="todo"
          >
            Todo
          </Link>
          <Link
            className="me-3 py-2 text-dark text-decoration-none"
            to="jsonplaceholder"
          >
            jsonplaceholder
          </Link>
         
        </nav>
      </div>
    </header>
  );
}

export default Header;
