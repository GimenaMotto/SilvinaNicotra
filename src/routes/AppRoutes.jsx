import { Routes, Route } from "react-router-dom"
import ImagesHome from "../components/ImageList"
import Audiovisual from "../components/Audiovisual"
import AboutMe from "../components/AboutMe"

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<ImagesHome />}></Route>
            <Route path='/audiovisuales' element={<Audiovisual />}></Route>
            <Route path='/sobremí' element={<AboutMe />}></Route>
        </Routes>
    )
}

export default AppRoutes