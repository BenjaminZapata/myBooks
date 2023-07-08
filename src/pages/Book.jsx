import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

export default function Book() {
  const location = useLocation()
  const book = location.state
  const imageKey = book.isbn ? book.isbn[0] : book.lccn ? book.lccn[0] : ''

  return (
    <>
      <Navbar/>
      <main className='flex justify-center p-8'>
        <picture>
          <img src={`https://covers.openlibrary.org/b/isbn/${imageKey}-L.jpg`}/>
        </picture>
        <aside></aside>
      </main>
    </>
  )
}
