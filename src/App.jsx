import { CssBaseline } from "@mui/material"
import TodoList from "./TodoList"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ReactGA from "react-ga4"

const ga4_id = import.meta.env.VITE_GA4

ReactGA.initialize(ga4_id)

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
})

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
      <Footer />
    </>
  )
}

export default App
