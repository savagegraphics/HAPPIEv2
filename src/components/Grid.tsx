import React from 'react'


const Cards = () => {
  return (
    <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-4 mx-6 md:mx-12'>
      <div className='overflow-hidden bg-white rounded-lg shadow'>
        <div className='px-4 py-5 lg:p-6'>
          <dl>
            <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
              <p>23</p>
              <img src='/svg/vector/Vector (1).svg' alt='' />
            </dt>
            <dd className='text-xs font-medium leading-5 text-gray-500 truncate'>
              Active Shipment
            </dd>
          </dl>
        </div>
      </div>
      <div className='overflow-hidden bg-white rounded-lg shadow'>
        <div className='px-4 py-5 lg:p-6'>
          <dl>
            <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
              <p>0</p>
              <img src='/svg/vector/Vector (1).svg' alt='' />
            </dt>
            <dd className='text-xs font-medium leading-5 text-gray-500 truncate'>
              Cancelled
            </dd>
          </dl>
        </div>
      </div>
      <div className='overflow-hidden bg-white rounded-lg shadow'>
        <div className='px-4 py-5 lg:p-6'>
          <dl>
            <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
              <p>50</p>
              <img src='/svg/vector/Vector (1).svg' alt='' />
            </dt>
            <dd className='text-xs font-medium leading-5 text-gray-500 truncate'>
              Completed
            </dd>
          </dl>
        </div>
      </div>
      <div className='overflow-hidden bg-white rounded-lg shadow'>
        <div className='px-4 py-5 lg:p-6'>
          <dl>
            <dt className='flex justify-between mb-1 text-3xl font-semibold leading-9 text-gray-900'>
              <p>50</p>
              <img src='/svg/vector/Vector (1).svg' alt='' />
            </dt>
            <dd className='text-xs font-medium leading-5 text-gray-500 truncate'>
              Completed
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Cards
