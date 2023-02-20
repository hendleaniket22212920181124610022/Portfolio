import { Container } from "./Header.styled";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
import { Link , useLocation} from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <div className="logo">
        <Link to="/" className={location.pathname === "/" ? "home_h1" : "h1"}>
          {/* <img
            src={
              location.pathname === "/"
                ? `./images/logo/1.png`
                : `./images/logo/2.png`
            }
            alt=""
          /> */}
          Aniket Hendle.
        </Link>
      </div>
      <div className={location.pathname === "/" ? "home_links" : "links"}>
        <a href="https://github.com/hendleaniket22212920181124610022">
          <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/aniket-hendle-935049225">
          <FaLinkedin />
        </a>
        
      </div>
    </Container>
  );
};

export default Header;