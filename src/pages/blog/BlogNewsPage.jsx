import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetComponent from "../../components/utility/Helmet";
import blog from "../../images/blog-1.jpg";
import styles from "./blogPage.module.css";

const BlogNewsPage = () => {
  return (
    <section className={`pt-5 pb-5 text-black-50 ${styles.ourBlogs}`}>
      <HelmetComponent title="Blog Post" />
      <Container>
        <Row>
          <Col md="3">
            <div className={`mb-2 ${styles.ourBlogs__filter}`}>
              <h3 className="fw-bold" style={{ fontSize: "16px" }}>
                Shop By Categories
              </h3>
              <div>
                <ul>
                  <li>Home</li>
                  <li>our store</li>
                  <li>Blogs</li>
                  <li>Content</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md="9">
            <div className="blog__article">
              <h3 className="text-black">A Beautifel Morning Renaissance</h3>
              <img src={blog} width="100%" alt="Blog Post" />
              <p className="my-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <div className="d-flex">
                <p className="me-3">11 Jun, 2023</p>
                <p>Jhon Dea</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <Link to="/our-blogs" style={{ color: "inherit" }}>
                  <div>
                    <i className="fa-solid fa-angles-left fa-shake cursor-pointer"></i>
                    <p
                      className="d-inline-block ms-3"
                      style={{ cursor: "pointer" }}
                    >
                      Back to Blog
                    </p>
                  </div>
                </Link>
                <div>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-pinterest-p mx-4"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </div>
              <hr />
              <div className="bg-white p-3 rounded-1 shadow">
                <h5>Leave A comment</h5>
                <form action="">
                  <input
                    type="text"
                    className="w-50 border-0 ps-3 rounded-1"
                    placeholder="Name *"
                    style={{ backgroundColor: "#f1f1f1" }}
                  />
                  <input
                    type="email"
                    className="w-50 border-0 ps-3 rounded-1"
                    placeholder="email *"
                    style={{ backgroundColor: "#f1f1f1" }}
                  />
                  <textarea
                    placeholder="comment"
                    className="w-100 mt-3 border-0 ps-3"
                    cols="30"
                    rows="5"
                    style={{ backgroundColor: "#f1f1f1" }}
                  ></textarea>
                  <Button
                    className={`rounded-pill border-0 mt-2 px-5 bg-black `}
                  >
                    Post Comment
                  </Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogNewsPage;
