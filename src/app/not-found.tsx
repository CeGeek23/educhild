import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const error = async () => (
  <div
    className="py-[30px] lg:py-[60px] bg-[var(--bg-2)]"
    style={{ height: '100vh' }} 
  >
    <div className="container">
      <div className="flex justify-center">
        <div className="col-span-10 lg:col-span-6">
          <div className="text-center pb-10">
            <Image src="/error-img.png" width={850} height={500} alt="error404 image" />
            <h2 className="mt-8 mb-4 h2"> Oops! Page Not Found </h2>
            <Link href="/" className="btn-primary font-semibold">
              <h4 className="inline-block"> Back To Home </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default error;
