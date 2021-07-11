import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer"
import PageFormat from "./PageFormat"

function Homepage() {
    return (
        <>
            <NavBar />
            <br />
            <h1>Blog</h1>
            <PageFormat>
                <p>
                    This is a blog about healthy relationships, ethical non-monogamy (poly), and social anxiety.
                </p>

                <h6>Poly</h6>

                <p><a href="/blog/july-11-2021">Why I am Poly</a></p>

                {/* <h6>Healthy Relationships</h6>

                <p><a href="/blog/date">Post Title</a></p>

                <h6>Social Anxiety</h6>

                <p><a href="/blog/date">Post Title</a></p> */}

            </PageFormat>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    );
}

export default Homepage;
