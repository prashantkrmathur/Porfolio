import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import emotion from "../../Assets/Projects/emotion.jpeg";
import { AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


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
              imgPath={emotion}
              isBlog={false}
              title="Clone of the abhibus.com"
              description="abhibus.com is online ticketing company that facilitates online booking of bus and train tickets to travellers all over India.It also provide the hotel booking for the users. With ticket inventory from over 1500 operators and 15000 routes."
              link="https://abhi-bus-clone.vercel.app/"
              gitlink="https://github.com/kerrybli/abhibus-clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Clone of the pepperfry.com"
              description="Pepperfry is an online marketplace for furniture and home decor."
              link="https://abhi-bus-clone.vercel.app/"
              gitlink=""
            />
          </Col>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prashantkrmathur"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_prashantmathur"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prashantkrmathur/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto://prashantkrmathur@gmail.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
