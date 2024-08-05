import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer border-top px-sm-2 py-2">
      <Container fluid className="text-center align-items-center flex-column flex-md-row d-flex justify-content-between">
        <div className="d-flex align-items-center">
          © 2024 EduChildApp.
        </div>
        <a href="/landing">
          <div className="ms-md-auto" title="EduCHild Application">
            <Image src="/logo.svg" alt="EduChildApp Logo" className="me-1" width={90} height={90} />
          </div>
        </a>
      </Container>
    </footer>
  )
}
