import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then(resp => resp.json())
      .then(resp => {
        setResults(resp.docs)
      })
  }

  const showBooks = () => {
    if (results.length == 0){
      return <p className='col-span-3'>No results found...</p>
    } else {
      const someResults = results.slice(0, 20)
      const books = []
      someResults.map(book => {
        const imageKey = book.isbn ? book.isbn[0] : book.lccn ? book.lccn[0] : ''
        books.push(
        <li key={book.key}>
            <Link 
              to={`/book/${book.key.slice(7)}`}
              state={book}  
            >
            <img 
              className='hover:scale-105' 
              src={`https://covers.openlibrary.org/b/isbn/${imageKey}-M.jpg`} 
            />
          </Link>
        </li>)
      })
      return books
    }
  }

  return (
    <>
      <Navbar/>
      <main className="flex flex-col justify-center m-0 text-stone-950">
        <section className="w-100 min-h-[600px] flex flex-col items-center justify-center gap-y-4 bg-[url('/homeBackground.jpg')] bg-cover bg-center gras">
          <section className='flex flex-col items-center gap-y-1'>
            <h1 className="text-5xl font-medium">Welcome to myBooks</h1>
            <h3 className="text-xl font-medium pt-1">Search your favorites titles right here</h3>
          </section>
          <form 
            className='flex gap-3 justify-center pt-4'
            onSubmit={(e) => handleSearch(e)}
          >
            <input 
              className='w-96 py-2 px-3 rounded-lg' 
              placeholder='Name of the novel, book, comic...'
              value={query}
              onChange={(e) => handleChange(e)}
            />
            <button className='bg-orange-300 p-3 rounded-full'><img className='w-[20px]' src='/search.png'/></button>
          </form>
        </section>
        <section className='w-100 flex flex-col items-center pt-4'>
          <h2 className='text-4xl font-semibold pb-4'>Results</h2>
          <article className='pt-4'>
            <ul className='grid grid-cols-3 gap-10'>
              {
                showBooks()
              }
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}
