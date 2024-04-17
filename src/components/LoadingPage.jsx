import Container from '@/UI/Container'
import Loader from '@/UI/Loader'
import React from 'react'

export default function LoadingPage() {
    return (
        <Container style={{ height: '100vh', display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <Loader />
        </Container>
    )
}
