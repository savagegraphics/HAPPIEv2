import React from 'react'
import BiggerGrid from './BiggerGrid'

const Grid = () => {
  return (
    <div className='lg:flex lg:-mx-6'>
      <div className='lg:w-4/6 lg:px-6'>
        <BiggerGrid />
      </div>

      <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4 rounded-lg'></div>
    </div>
  )
}

export default Grid
