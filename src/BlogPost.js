import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PageFormat from "./PageFormat";
import AuthorCard from "./AuthorCard";
import July11th2021 from "./blogPosts/July11th2021";


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
        let idx = this.props.url.lastIndexOf("/")
        let postName = this.props.url.slice(idx + 1);
        switch (postName) {
            case "july-11-2021":
                this.setState({
                    blogPost: <July11th2021 />,
                    title: "Why I am Poly",
                    date: <time dateTime="2021-07-11">July 11<sup>th</sup>,
                    2021</time>
                });
                break;
            default:
                // Hash router has trouble getting the url if clicked from homepage. Reloading once fixes this.
                window.location.reload();
                console.log(`Error: default case triggered. Post name: ${postName}`);
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
                    {this.props.children}
                </PageFormat>
                <Footer />
            </>
        );
    }
}

export default BlogPost;
