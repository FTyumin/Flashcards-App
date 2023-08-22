import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home';
import MainWrapper from './layouts/MainWrapper';
import Login from './views/auth/login';
import Logout from './views/auth/logout';
import Register from './views/auth/register';
import NotFoundTitle from './views/error';
import Flash from './views/cards/flashcards';
import AddCard from './views/cards/addCard';
import newCard from './views/cards/newCard';
import NewCard from './views/cards/newCard';


function App() {
    return (
        <BrowserRouter>
            <MainWrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path='/safe' element= {<Flash/>}/>
                        <Route path='/newcard' element= {<NewCard/>}/>
                        <Route path='*' element={<NotFoundTitle />}/>
                    </Routes>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;