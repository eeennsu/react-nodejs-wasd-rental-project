
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, ManagerPage, MyPage, RentPage } from './components';
import Layout from './layout/Layout';

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/'  element={<MainPage />} />
                <Route element={<Layout />}>                    
                    <Route path='/rent' element={<RentPage />} />
                    <Route path='/my-page/:id' element={<MyPage />} />
                    <Route path='/manager' element={<ManagerPage />} />              
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;