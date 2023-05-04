import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './productCard/ProductCard.jsx'

const ProductSection = () => {
  return (
    <section style={{backgroundColor: "#f4f5f3"}}>
      <Container>
        <Row className='justify-content-between align-items-center'>
            <h2 className='mt-4'>Featured Collection</h2>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Row>
      </Container>
    </section>
  )
}

export default ProductSection
