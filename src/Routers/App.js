import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../page/about';
import Portfolio from '../page/portfolio';
import Contact from '../page/contact';
import Error from '../page/error'
import Home from '../page/home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/portfolio' element={<Portfolio/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/error' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;




