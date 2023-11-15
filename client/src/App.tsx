
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, ManagerPage, ManagerToolStatus, MyPage, RentPage } from './pages';
import MainLayout from './layout/MainLayout';
import SampleNav from './layout/components/SampleNav';
import OtherLayout from './layout/OtherLayout';
import RootLayout from './layout/RootLayout';
import ExamplePage from './pages/ExamplePage/ExamplePage';

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SampleNav />}/>            
                <Route element={<RootLayout />}>
                    <Route element={<MainLayout />}>
                        <Route index path='/main' element={<MainPage />} />       
                        <Route path='/example' element={<ExamplePage />} />     
                    </Route>
                    <Route element={<OtherLayout />}>            
                        <Route path='/rent' element={<RentPage />} />
                        <Route path='/my-page/:id' element={<MyPage />} />
                        <Route path='/manager' element={<ManagerPage />} />          
                        <Route path='/manager/tool-status' element={<ManagerToolStatus />} />    
                    </Route>
                </Route>                  
            </Routes>
        </BrowserRouter>
    );
}

export default App;