import Section from "../section";
import { Container, Row, Col, Button } from "reactstrap";
import { Action } from "rxjs/internal/scheduler/Action";
import Link from "next/link"

const ProjectExplore = () => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className=" text-center" id="main-headline">
          <h5 className="section-title"> Explore </h5>
        </div>
      </Row>

      <Row>
        <div className="text-center" id="sub-headline">
          <p>
            For more information on making a lasting impact through a project
            team or working with us to solve a core need for your organization,
            click below!
          </p>
        </div>
      </Row>

      <Row>
        <div className="text-center">
          <Button outline style={{ marginRight: "20px" }}>
            <Link href="/apply/students">
              <a>
                Students
            </a>
            </Link>
          </Button>
          <Button outline>
            <Link href="/apply/non-profits">
              <a>
                Non Profits
            </a>
            </Link>
          </Button>

        </div>
      </Row>
    </Container>
  </Section>
);
export default ProjectExplore;
