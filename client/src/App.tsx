
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MainPage, ManagerPage, ManagerToolStatus, MyPage, RentPage } from './pages';
import Layout from './layout/Layout';
import SampleNav from './layout/SampleNav';



const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SampleNav />}/>               
                <Route element={<Layout />}>             
                    <Route index path='/main' element={<MainPage />} />       
                    <Route path='/rent' element={<RentPage />} />
                    <Route path='/my-page/:id' element={<MyPage />} />
                    <Route path='/manager' element={<ManagerPage />} />          
                    <Route path='/manager/tool-status' element={<ManagerToolStatus />} />    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;