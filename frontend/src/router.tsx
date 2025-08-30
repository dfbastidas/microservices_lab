import { BrowserRouter, Routes, Route } from "react-router"
import IndexPage from "./views/IndexPage"
import HomePage from "./views/HomePage"
import Layout from "./layouts/Layout"
import ProfilePage from "./views/ProfilePage"
import AddVideoPage from "./views/AddVideoPage"
import ViewVideo from "./views/ViewVideo"


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage/>} index></Route>
            <Route element={<Layout/>}>
              <Route path="/videos" element={<HomePage/>}></Route>
              <Route path="/view/video/:id" element={<ViewVideo/>}></Route>
              <Route path="/add-video" element={<AddVideoPage/>}></Route>
              <Route path="/profile" element={<ProfilePage/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
