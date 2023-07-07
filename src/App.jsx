import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
// https://openlibrary.org/dev/docs/api/search
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
            path='*'
            element={<Error/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
