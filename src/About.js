import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer"
import PageFormat from "./PageFormat"

function About() {
    return (
        <>
            <NavBar />
            <br />
            <h1>About</h1>
            <PageFormat>
                <p>
                    S Morris is a software developer based on the East coast of the United States.
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
