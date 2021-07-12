import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PageFormat from "./PageFormat";
import AuthorCard from "./AuthorCard";
import July_11_2021 from "./blogPosts/July_11_2021";


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: "",
            title: "",
            date: ""
        }
    }

    getPost() {
        let idx = window.location.pathname.lastIndexOf("/")
        let postName = window.location.pathname.slice(idx + 1);
        switch (postName) {
            case "july-11-2021":
                this.setState({
                    blogPost: <July_11_2021 />,
                    title: "Why I am Poly",
                    date: <time datetime="2021-07-11">July 11<sup>th</sup>,
                    2021</time>
                });
                break;
            default:
                console.log("Error: default case triggered.");
        }
    }
    componentDidMount() {
        this.getPost();
    }

    render() {
        return (
            <>
                <NavBar />
                <PageFormat>
                    <AuthorCard title={this.state.title} date={this.state.date} />
                    {this.state.blogPost}
                </PageFormat>
                <Footer />
            </>
        );
    }
}

export default BlogPost;
