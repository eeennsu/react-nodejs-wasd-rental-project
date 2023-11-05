
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, ManagerPage, MyPage, RentPage } from './pages';
import Layout from './layout/Layout';
import SampleNav from './layout/SampleNav';
import './app.css';

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SampleNav />}/>               
                <Route element={<Layout />}>             
                    <Route path='/main' element={<MainPage />} />       
                    <Route path='/rent' element={<RentPage />} />
                    <Route path='/my-page/:id' element={<MyPage />} />
                    <Route path='/manager' element={<ManagerPage />} />              
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;