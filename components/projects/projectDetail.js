import { Container, Row, Col, Card } from "reactstrap";
import ProjectFeature from "./projectFeature";
import ProjectTechStack from "./projectTechStack";

const ProjectDetail = ({ project }) => (
  <section>
    <Container>
      <Row>
        <Col md="6">
          <Card className="border-0">
            <h5 className="card-title text-center text-title"> Problem </h5>
            <div className="text-center">
              <img
                src={project.problemImagePath}
                className="card-img-top"
                id="project-photo"
              />
            </div>
            <div className="card-body">
              <p className="card-text text-center">{project.problem}</p>
            </div>
          </Card>
        </Col>

        <Col md="6">
          <Card className="border-0">
            <h5 className="card-title text-center text-title"> Solution </h5>
            <div className="text-center">
              <img
                src={project.solutionImagePath}
                className="card-img-top"
                id="project-photo"
              />
            </div>
            <div className="card-body">
              <p className="card-text text-center">{project.solution}</p>
            </div>
          </Card>
        </Col>
      </Row>
      <ProjectFeature features={project.features} />
      <ProjectTechStack techStack={project.techStack} />
    </Container>
    <style jsx>{`
      #project-photo {
        height: 80%;
        width: 80%;
      }

      .tech-stack div {
        padding: 5px;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </section>
);

export default ProjectDetail;
