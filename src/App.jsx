import { useState } from "react"
import { css } from "@emotion/react"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import { Button } from "@ariakit/react"
//TODO: icon
// import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

//TODO: page with header & links?
const Layout = ({}) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

const Home = () => {
  return "I'm Home!"
}

const PageNotFound = () => {
  return "Oops!! Page Not Found"
}

export default App
