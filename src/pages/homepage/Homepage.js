// import { Link } from "react-router-dom";
import { Link } from "react-router-dom"
import Header from "../../components/header/Header";
import { Container } from "./Homepage.styled";
import { motion } from "framer-motion";
import { animation } from "../../components/Animation";

export const Homepage = () => {
  return (
    <Container>
      <motion.div
        variants={animation.general}
        initial="hidden"
        animate="show"
        exit="hide"
        className="homepage"
        style={{ backgroundImage: `url("./images/background/bg.png")` }}
      >
        <div className="overlay">
          <Header />
          
          <div className="hero">
            <h2>I am a MERN stack developer.</h2>

            <motion.div className="options" variants={animation.options}>
              <Link to="/projects" className="b">Projects</Link>
              <Link to="/skills" className="b">Skills</Link>
              <Link to="/services" className="b">Services</Link>
              <Link to="/contacts" className="b">Contact</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};