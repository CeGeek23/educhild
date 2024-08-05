import {
  Card, CardBody, Col, Row,
} from 'react-bootstrap'
import Register from '@/app/(authentication)/register/register'
import { getDictionary } from '@/locales/dictionary'
import Image from 'next/image'

export default async function Page() {
  const dict = await getDictionary()

  return (
    <Row className="justify-content-center">
      <Col md={7}>
        <Card className="mb-4 rounded-0">
          <CardBody className="p-4">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h1>{dict.signup.title}</h1>
                <p className="text-black-50 dark:text-gray-500">{dict.signup.description}</p>
              </div>
              <div>
                <Image src="/logo.svg" alt="EduChildApp Logo" width={150} height={150} />
              </div>
            </div>
            <div>
              <Register />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
