import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bookify"
              description="Bookify is a Book Purchasing Website which were built using MERN technology .Used JWT for authentication purpose "
              ghLink="https://github.com/akshayudupa7/book"
              demoLink="https://book-store-frontend-pic1v8c2i-akshay-us-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog-0f-C0de"
              description="My personal blog page build with React.js and Node.js which takes the content from makdown files. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/akshayudupa7/Blog-App"
              demoLink="https://friendly-trifle-654e1b.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book Taxi"
              description="Taxi Book is Online Taxi Bokking frontend website which were build only using Next.js and Tailwind css"
              ghLink="https://github.com/akshayudupa7/Taxi_book"
              demoLink="https://taxi-book.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
