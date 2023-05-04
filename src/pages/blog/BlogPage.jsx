import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../../components/blog/blogCard/BlogCard";
import { HelmetComponent } from "../../components/utility";
import styles from "./blogPage.module.css";

const BlogPage = () => {
  return (
    <section className={`pt-5 pb-5 ${styles.ourBlogs}`}>
      <HelmetComponent title="Our Blogs" />
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
            <Row>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPage;
