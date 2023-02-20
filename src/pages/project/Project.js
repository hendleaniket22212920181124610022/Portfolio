import { useParams } from "react-router-dom";
import { Container } from "./Project.styled";
import { projects } from "../../components/Data";
import Header from "../../components/header/Header";

const Project = () => {
  const { id } = useParams();
  const projectdata = projects.find(
    (item) => parseInt(item.id) === parseInt(id)
  );
  console.log(projectdata);
  return (
    <Container>
      <div className="project">
        <Header />
        <div className="projecthome">
          <div className="text">
            <h4>{projectdata.name}</h4>
            <div className="buttons">
              <a
                href="https://github.com/hendleaniket22212920181124610022?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code
              </a>
              <a
                href="https://drive.google.com/file/d/14qQu1frZ1f1FzQfKt7dPmI9-cXeQQYSa/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
            <div className="description">
              <h4>description:</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, laboriosam soluta. Dolore, hic. Maxime non rem
                doloremque modi exercitationem, ipsum libero atque asperiores
                deserunt quod sed id qui dolores obcaecati.
              </p>
            </div>
          </div>
          <img src={`../images/projects/${projectdata.image}`} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Project;