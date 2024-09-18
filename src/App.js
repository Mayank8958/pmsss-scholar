import "./App.css"
import { BrowserRouter,Routes, Route} from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
function App() {
  return (
    <>
    <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/adhaarv'element={<CourseHome/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/docsub' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
