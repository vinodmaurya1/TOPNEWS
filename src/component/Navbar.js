import { Link } from "react-router-dom";
import Dayicon from "./image/dayicon.png";
import Nighticon from "./image/nighticon.png";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand " to="/">
            Top News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  Business{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/health">
                  Health
                </Link>
              </li>
            </ul>
            <div > 
            <img id={"day"}
      style={{ height: "30px",cursor:'pointer' }}
      onClick={props.toggleMode}
      src={Dayicon}
      alt="dayicon"
    />
            <img id={'night'}
      style={{
        height: "30px",
        filter: "invert(110%) sepia(1%) saturate(1107%)",
        cursor:'pointer'
      }}
      onClick={props.toggleMode}
      src={Nighticon}
      alt="nighticon"
    />
           
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
