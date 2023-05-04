import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Offer from './Offer'

const HomeOfferies = () => {
    return (
        <section style={{backgroundColor: "#f4f5f3", paddingBottom: "30px"}}>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <h2 className='mt-4'>Sepcial Products</h2>
                    <Offer />
                    <Offer />
                    <Offer />
                </Row>
            </Container>
        </section>
    )
}

export default HomeOfferies
