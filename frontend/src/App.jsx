import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home';
import MainWrapper from './layouts/MainWrapper';
import Login from './views/auth/login';
import PrivateRoute from './layouts/PrivateRoute';
import Logout from './views/auth/logout';
import Private from './views/private';
import Register from './views/auth/register';
import NotFoundTitle from './views/error';
import Flash from './views/cards/flashcards';
import AddCard from './views/cards/newCards';
import Test from './views/cards/test';


function App() {
    return (
        <BrowserRouter>
            <MainWrapper>
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
                        <Route path='/cheel' element= {<Test/>}/>
                        <Route path='*' element={<NotFoundTitle />}/>
                    </Routes>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;