import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
  <div className='py-20' id="testimonials">
        <h1 className='heading'>
        Customer feedback drives
          <span className='text-purple'> my improvement ♡</span>
        </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed='slow'
          />
      </div>
  </div>

  )
}

export default Clients