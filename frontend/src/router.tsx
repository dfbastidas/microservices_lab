import { BrowserRouter, Routes, Route } from "react-router"
import IndexPage from "./views/IndexPage"
import HomePage from "./views/HomePage"


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage/>}></Route>
            <Route path="/homepage" element={<HomePage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
