import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import { AddCard, CardWithData } from '../component'

function PaymentMethods() {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold text-black mb-3">Payment methods</h2>
      <Card className="rounded-sm shadow-md">
        <CardBody>
          <div className='flex'>
            <CardWithData />
            <div className='ml-5'>
              <AddCard />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default PaymentMethods
