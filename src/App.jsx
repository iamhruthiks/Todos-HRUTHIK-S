import { CssBaseline } from "@mui/material"
import TodoList from "./TodoList"
import Navbar from "./Navbar"
import Footer from "./Footer"

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
