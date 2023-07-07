import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-orange-300 p-4 text-stone-950 flex justify-between'>
      <h5 className='text-3xl font-medium'><a href='/'>myBooks</a></h5>
      <section className='flex gap-x-4'>
        <button className='rounded-md py-2 px-3 hover:font-medium'>Home</button>
        <button className='rounded-md py-2 px-3 hover:font-medium'>My favorites</button>
        <button className='rounded-md py-2 px-3 hover:font-medium'></button>
      </section>
    </nav>
  )
}
