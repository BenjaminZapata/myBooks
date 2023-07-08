import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Error from "./pages/Error"
import Book from "./pages/Book"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
          <Route
            path='/favorites'
            element={<Favorites/>}
          />
          <Route
            path='/book/:bookId'
            element={<Book/>}
          />
          <Route
            path='*'
            element={<Error/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
