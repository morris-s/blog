import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer"
import PageFormat from "./PageFormat"
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
    return (
        <>
            <NavBar />
            <br />
            <h1>About</h1>
            <PageFormat>
                <Container>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <Image src={process.env.PUBLIC_URL + "/images/headshot.png"} roundedCircle fluid />
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                </Container>

                <br /><br />

                <p>
                    S. Morris is a software developer based on the East Coast of the United States.
                </p>

                <p>
                    This is a blog about healthy relationships, ethical non-monogamy (poly), and social anxiety.
                </p>

            </PageFormat>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    );
}

export default About;
