import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home';
import MainWrapper from './layouts/MainWrapper';
import Login from './views/login';
import PrivateRoute from './layouts/PrivateRoute';
import Logout from './views/logout';
import Private from './views/private';
import Register from './views/register';
import NotFoundTitle from './views/error';
import NewFlashcard from './views/newCards';
import Flash from './views/flashcards';


function App() {
    return (
        <BrowserRouter>
            <MainWrapper>
                {/* <Navbar/> */}
                    <Routes>
                        <Route
                            path="/private"
                            element={
                                <PrivateRoute>
                                    <Private />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path='/safe' element= {<Flash/>}/>
                        <Route path="/newcard" element = {<NewFlashcard/>}/>
                        <Route path='*' element={<NotFoundTitle />}/>
                    </Routes>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;