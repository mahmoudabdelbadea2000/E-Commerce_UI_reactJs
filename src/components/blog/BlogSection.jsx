import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BlogCard from './blogCard/BlogCard'

const BlogSection = () => {
  return (
    <section style={{backgroundColor: "#f4f5f3"}}>
      <Container>
        <Row className='justify-content-between align-items-center'>
            <h2 className='mt-4'>Our Latest Blogs</h2>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </Row>
      </Container>
    </section>
  )
}

export default BlogSection