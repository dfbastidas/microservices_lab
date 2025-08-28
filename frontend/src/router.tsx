import { BrowserRouter, Routes, Route } from "react-router"
import IndexPage from "./views/IndexPage"
import HomePage from "./views/HomePage"
import Layout from "./layouts/Layout"
import ProfilePage from "./views/ProfilePage"


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<IndexPage/>} index></Route>
              <Route path="/homepage" element={<HomePage/>}></Route>
              <Route path="/profile" element={<ProfilePage/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
