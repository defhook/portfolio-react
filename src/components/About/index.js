import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import coverImage from "../../assets/cover/Surf.jpg";
import bioImage from "../../assets/biopic/me.jpg";

function About() {
  return (
    <section>
      <Container Fluid>
        <Row>
          <h1 id="about">Who am I?</h1>
          <Col>
            <img
              src={coverImage}
              style={{ width: "30%" }}
              alt="MERN"
            />
          </Col>
          <Col>
            <img
              src={bioImage}
              style={{ width: "30%" }}
              alt="me"
            />
          </Col>
          <div>
            <p>
              My name is Alvin. I have been working in the insurance industry
              for a little bit over a decade. I have recently started working on
              databases and creating reports based on analytics. I have always
              been a technology driven person and have recently started a
              Full-Stack Web Developer certificate program through the
              University of Arizona. I enjoy tackling problems and resolving
              them. I love the logic and structure of coding. I look forward to
              growing in the coding platform with my new found skill.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
