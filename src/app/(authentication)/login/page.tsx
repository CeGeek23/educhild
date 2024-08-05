import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import LoginForm from '@/app/(authentication)/login/login'
import { SearchParams } from '@/types/next'
import { getDictionary } from '@/locales/dictionary'
import Image from 'next/image'

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { callbackUrl } = searchParams
  const dict = await getDictionary()

  const getCallbackUrl = () => {
    if (!callbackUrl) {
      return '/' // Default redirect to home page
    }

    return callbackUrl.toString()
  }

  return (
    <Row className="justify-content-center align-items-center px-3">
      <Col lg={10}>
        <Row>
          <Col md={6} className="bg-white dark:bg-dark border p-4">
            <div className="d-flex align-items-center justify-content-between">
                <Image src="/logo.svg" alt="EduChildApp Logo" width={150} height={150} />
              <div>
                <h1>{dict.login.title}</h1>
                <p className="text-black-50 dark:text-gray-500">{dict.login.description}</p>
                <LoginForm callbackUrl={getCallbackUrl()} />
              </div>
            </div>
          </Col>
          <Col
            md={4}
            className="bg-primary text-white d-flex align-items-center justify-content-center p-5"
          >
            <div className="text-center">
              <h2>{dict.login.signup.title}</h2>
              <p>{dict.login.signup.description}</p>
              <Link className="btn btn-lg btn-outline-light mt-3" href="/register">
                {dict.signup.register_now}
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
