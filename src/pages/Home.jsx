import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex justify-center m-0 text-stone-950">
        <section className="w-screen min-h-[600px] flex flex-col items-center justify-center gap-y-4 bg-[url('/homeBackground.jpg')] bg-cover bg-center gras">
          <section className='flex flex-col items-center gap-y-1'>
            <h1 className="text-5xl font-medium">Welcome to myBooks</h1>
            <h3 className="text-xl font-medium pt-1">Search your favorites titles right here</h3>
          </section>
          <form className='flex gap-3 justify-center pt-4'>
            <input 
              className='w-96 py-2 px-3 rounded-lg' 
              placeholder='Name of the novel, book, comic...'
            />
            <button className='bg-orange-300 p-3 rounded-full'><img className='w-[20px]' src='/search.png'/></button>
          </form>
        </section>
      </main>
    </>
  )
}
