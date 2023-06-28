import { useState } from "react"
import { css } from "@emotion/react"
import { Button } from "@ariakit/react"
//TODO: icon
// import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          css={css`
            color: green;
          `}
        >
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
